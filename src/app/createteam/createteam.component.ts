import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-createteam',
  templateUrl: './createteam.component.html',
  styleUrls: ['./createteam.component.css']
})
export class CreateteamComponent implements OnInit {

  isSendOTPVisible = true;

  private fb: FormBuilder = new FormBuilder()
  createTeam = this.fb.group({
    name: ['shubham.more26@gmail.com', Validators.required],
    creatorEmail: ['', Validators.compose([Validators.required, Validators.email])],
    teamPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    points: ['0', Validators.required],
    otp: ['', Validators.required]
  })

  verifyUserEmail() {
    console.log(this.createTeam.controls['creatorEmail'].valid)
  }
  sendOTP() {
    if (this.createTeam.controls['creatorEmail'].valid) {
      this.isSendOTPVisible = false;
    } else {
      this.isSendOTPVisible = true;
    }
  }

  onSubmit() {
    console.log(this.createTeam.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
