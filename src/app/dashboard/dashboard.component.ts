import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentDate=new Date();

  title = 'kanakaiplmania';


  YMATCH="results for KKR v KP";
  YMOM=" K L Rahul";
  YBTS=" V Iyer and K L Rahul - 67";
  YBOW="Arshdeep Singh  3 for 32";

}
