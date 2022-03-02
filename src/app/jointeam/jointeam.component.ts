import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-jointeam',
  templateUrl: './jointeam.component.html',
  styleUrls: ['./jointeam.component.css']
})
export class JointeamComponent implements OnInit {

  isSendOTPVisible = true;
  disableCreatorEmail: boolean = false;
  otpLabel = "Send OTP"
  VerifyLabel = "Verify"

  private fb: FormBuilder = new FormBuilder()
  createUser = this.fb.group({
    teamId: ['2', Validators.compose([Validators.required])],
    username: ['SHubham MORE', Validators.compose([Validators.required, Validators.minLength(10)])],
    userPassword: ['SHubham MORE', Validators.compose([Validators.required, Validators.minLength(6)])],
    favoriteTeam: ['MI', Validators.required],
    favoriteCricketPlayer: ['RO', Validators.required],
    otp: ['', Validators.compose([Validators.required, Validators.maxLength(4), Validators.minLength(4), Validators.pattern("^[0-9]*$")])],
    otpStatus: ['', Validators.required],
    email: ['shubham.more@kanakasoftware.com', Validators.compose([Validators.required, Validators.email, Validators.minLength(10)])],

  })


  onSubmit() {

    let body = {
      "teamId": +this.createUser.controls['teamId'].value,
      "username": this.createUser.controls['username'].value,
      "userPassword": this.createUser.controls['userPassword'].value,
      "favoriteTeam": this.createUser.controls['favoriteTeam'].value,
      "favoriteCricketPlayer": this.createUser.controls['favoriteCricketPlayer'].value,
      "email": this.createUser.controls['email'].value,
    }
    this.SharedService_.registerUser(body).subscribe(
      (res) => {
        console.log("res", res)
      }, error => {
        console.log(error)
      }

    )
  }


  sendOTP() {
    this.disableCreatorEmail = true;
    let body = { 'email': this.createUser.controls['email'].value }
    this.otpLabel = "Sending"
    if (this.createUser.controls['email'].valid) {
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
    this.SharedService_.verifyEmail({ 'email': this.createUser.controls['email'].value, otp: this.createUser.controls['otp'].value }).subscribe(
      (data) => {
        if (data['status'] == 200) {
          this.VerifyLabel = 'Verified'
          this.createUser.controls['otpStatus'].setValue('verified')
        } else {
          this.disableCreatorEmail = true;
          this.createUser.controls['otpStatus'].setValue('')
        }
      }, error => {
        this.VerifyLabel = "Verify"
        console.log(error)
      })
  }
  constructor(private SharedService_: SharedService,) { }

  ngOnInit(): void {
  }

}
