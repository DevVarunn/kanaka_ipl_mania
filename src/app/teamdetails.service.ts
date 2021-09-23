import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamdetailsService {

  Teamdetails = [
    {
      "Team_Id": 1,
      "Team_Name": "Puneri Bana",
      "Team_Points": 2,
      "Team_Logo": "PuneriBana.png",
      "Team Members": ["Varun Kulkarni", "Chaitali Suryawanshi", "Yogesh Babar"]
    },
    {
      "Team_Id": 2,
      "Team_Name": "Pune Phoenix Risers",
      "Team_Points": 0,
      "Team_Logo": "punePhoenixRisers.png",
      "Team Members": ["Tanmay kulkarni", "Sujit Kharat", "Apratim Gholap"]
    },
    {
      "Team_Id": 3,
      "Team_Name": "Puneri Paltan",
      "Team_Points": 1,
      "Team_Logo": "puneriPaltan.png",
      "Team Members": ["Suraj Kalbhor", "Rajendra Garade", "Tejas Dhande"]
    },
    {
      "Team_Id": 4,
      "Team_Name": "Puneri Fighters",
      "Team_Points": 1,
      "Team_Logo": "PuneriFighter.png",
      "Team Members": ["Shweta Ranpise", "Ujjwal Bhattacharyya", "Prasad Muley"]
    },
    {
      "Team_Id": 5,
      "Team_Name": "Pune Peshwas",
      "Team_Points": 1,
      "Team_Logo": "punePeshwas.png",
      "Team Members": ["Mangesh Kulkarni", "Atharva Bhatkhalkar", "Shubham Kamble", "Krishna Kawade"]
    },
    {
      "Team_Id": 6,
      "Team_Name": "Pune Warriors",
      "Team_Points": 1,
      "Team_Logo": "puneWarriors.png",
      "Team Members": ["Amey Taksale", "Yash Abhyankar", "Rahul Chavan"]
    },
    {
      "Team_Id": 7,
      "Team_Name": "Kanaka Strikers",
      "Team_Points": 0,
      "Team_Logo": "kanakaStrikers.png",
      "Team Members": ["Nikita Pingle", "Diptee Hamdapurkar", "Chetan Mahore"]
    },
    {
      "Team_Id": 8,
      "Team_Name": "Game Swingers",
      "Team_Points": 0,
      "Team_Logo": "gameSwingers.png",
      "Team Members": ["Nitin Shirsat", "Akshay Misal", "Aishwarya Sukre"]
    },
    {
      "Team_Id": 9,
      "Team_Name": "Xtreme Pune",
      "Team_Points": 1,
      "Team_Logo": "XtremePune.png",
      "Team Members": ["Navratan Jangid", "Akshay Bhagat", "Shubham More"]
    }
  ]

  getTeamDeda(){
    return this.Teamdetails
  }

  constructor() { }
}
