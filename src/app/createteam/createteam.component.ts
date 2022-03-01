import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
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
    name: ['Shubham More', Validators.compose([Validators.required, Validators.minLength(10)])],
    creatorEmail: ['shubham.more@kanakasoftware.com', Validators.compose([Validators.required, Validators.email, Validators.minLength(10)])],
    teamPassword: ['Shubham', Validators.compose([Validators.required, Validators.minLength(6)])],
    confirmPassword: ['Shubham', Validators.compose([Validators.required, Validators.minLength(6)])],
    points: ['0', Validators.required],
    otp: ['', Validators.compose([Validators.required, Validators.maxLength(4), Validators.minLength(4)])],
    otpStatus: ['', Validators.required],
    favoriteTeam: ['MI', Validators.required],
    favoriteCricketPlayer: ['Rohit', Validators.required]
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
          this.createTeam.controls['otpStatus'].setValue('verified')
        } else {
          this.disableCreatorEmail = true;
          this.createTeam.controls['otpStatus'].setValue('')
        }
      }, error => {
        this.VerifyLabel = "Verify"
        console.log(error)
      })
  }

  createTeamApi() {

    if (this.createTeam.controls['teamPassword'].value == this.createTeam.controls['confirmPassword'].value) {
      this.SharedService_.createTeam(this.createTeam.value).subscribe(
        (data) => {
          if (data['status'] == 200) {
            this.createTeam.reset()
          }
          console.log(data)
        }, error => { console.log(error) }
      )

      console.log("called createTeamApi")
    } else {
      console.log("password mismatch")
    }

  }

  onSubmit() {
    console.log("called onSubmit")
    this.createTeamApi()
  }


  constructor(private SharedService_: SharedService,) { }

  ngOnInit(): void {
  }

}
