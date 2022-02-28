import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-createteam',
  templateUrl: './createteam.component.html',
  styleUrls: ['./createteam.component.css']
})
export class CreateteamComponent implements OnInit {

  isSendOTPVisible = true;
  disableCreatorEmail: boolean = false;
  otpLabel = "Send OTP"
  VerifyLabel = "Verify"

  private fb: FormBuilder = new FormBuilder()
  createTeam = this.fb.group({
    name: ['shubham.more26@gmail.com', Validators.required],
    creatorEmail: ['shubham.more@kanakasoftware.com', Validators.compose([Validators.required, Validators.email])],
    teamPassword: ['s', Validators.compose([Validators.required, Validators.minLength(6)])],
    confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    points: ['0', Validators.required],
    otp: ['', Validators.required]
  })

  sendOTP() {
    this.disableCreatorEmail = true;
    let body = { 'email': this.createTeam.controls['creatorEmail'].value }
    this.otpLabel = "Sending"
    if (this.createTeam.controls['creatorEmail'].valid) {
      this.SharedService_.sendOTP(body).subscribe(
        (data) => {
          this.isSendOTPVisible = false;
          console.log(data)
        },
        (error) => {
          console.log(error)
        }
      )

    } else {
      this.isSendOTPVisible = true;
    }
  }

  verifyEmail() {
    this.SharedService_.verifyEmail({ 'email': this.createTeam.controls['creatorEmail'].value, otp: this.createTeam.controls['otp'].value }).subscribe(
      (data) => {
        if (data['status'] == 200) {
          this.VerifyLabel = 'Verified'
        } else {
          this.disableCreatorEmail = true;
        }
      }, error => {
        this.VerifyLabel = "Verify"
        console.log(error)
      })
  }

  createTeamApi() {
    console.log("called createTeamApi")

    let body = {
      'name': this.createTeam.controls['name'].value,
      'creatorEmail': this.createTeam.controls['creatorEmail'].value,
      'teamPassword': this.createTeam.controls['teamPassword'].value,
      'confirmPassword': this.createTeam.controls['confirmPassword'].value,
      'points': this.createTeam.controls['points'].value,
      'otp': this.createTeam.controls['otp'].value
    }

    this.SharedService_.createTeam(body).subscribe(
      (data) => {
        console.log(data)
      }, error => { console.log(error) }
    )

  }

  onSubmit() {
    console.log("called onSubmit")
    this.createTeamApi()
  }


  constructor(private SharedService_: SharedService,) { }

  ngOnInit(): void {
  }

}
