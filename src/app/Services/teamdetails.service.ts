import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TeamdetailsService {
  // apiUrl = 'https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json'
  apiUrl = 'https://docs.google.com/spreadsheets/d/1DHxB7wGNX7EJ8_XrQR3HAHMjhxq2ziBax-7y1NzKrpE/gviz/tq?tqx=out:json'
  // URL_teamDetails = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRl1fFRKe97d5FwJhDP--m-XcB7kHs2zGfXdV4MwB8YhrUwFCMWk9xPG0pGn0DCpIPnaOrij4Jdy69n/pubhtml'

  URL_teamDetails = 'https://docs.google.com/spreadsheets/d/17QODL8aJoJeHrcVJt3BqecEVxa2oA9hKc1y0CTYhVwY/gviz/tq?tqx=out:json'



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
  };



  Teamdetails = [
    {
      "Team_Id": 1,
      "Team_Name": "Puneri Bana",
      "Team_Points": 2,
      "Team_Logo": "PuneriBana.png",
      "Team_Members": ["Varun Kulkarni", "Chaitali Suryawanshi", "Yogesh Babar"],
      "Pass_Code": 1010
    },
    {
      "Team_Id": 2,
      "Team_Name": "Pune Phoenix Risers",
      "Team_Points": 0,
      "Team_Logo": "punePhoenixRisers.png",
      "Team_Members": ["Tanmay kulkarni", "Sujit Kharat", "Apratim Gholap"]
    },
    {
      "Team_Id": 3,
      "Team_Name": "Puneri Paltan",
      "Team_Points": 1,
      "Team_Logo": "puneriPaltan.png",
      "Team_Members": ["Suraj Kalbhor", "Rajendra Garade", "Tejas Dhande"]
    },
    {
      "Team_Id": 4,
      "Team_Name": "Puneri Fighters",
      "Team_Points": 1,
      "Team_Logo": "PuneriFighter.png",
      "Team_Members": ["Shweta Ranpise", "Ujjwal Bhattacharyya", "Prasad Muley"]
    },
    {
      "Team_Id": 5,
      "Team_Name": "Pune Peshwas",
      "Team_Points": 1,
      "Team_Logo": "punePeshwas.png",
      "Team_Members": ["Mangesh Kulkarni", "Atharva Bhatkhalkar", "Shubham Kamble", "Krishna Kawade"]
    },
    {
      "Team_Id": 6,
      "Team_Name": "Pune Warriors",
      "Team_Points": 1,
      "Team_Logo": "puneWarriors.png",
      "Team_Members": ["Amey Taksale", "Yash Abhyankar", "Rahul Chavan"]
    },
    {
      "Team_Id": 7,
      "Team_Name": "Kanaka Strikers",
      "Team_Points": 1,
      "Team_Logo": "kanakaStrikers.png",
      "Team_Members": ["Nikita Pingle", "Diptee Hamdapurkar", "Chetan Mahore"]
    },
    {
      "Team_Id": 8,
      "Team_Name": "Game Swingers",
      "Team_Points": 0,
      "Team_Logo": "gameSwingers.png",
      "Team_Members": ["Nitin Shirsat", "Akshay Misal", "Aishwarya Sukre"]
    },
    {
      "Team_Id": 9,
      "Team_Name": "Xtreme Pune",
      "Team_Points": 1,
      "Team_Logo": "XtremePune.png",
      "Team_Members": ["Navratan Jangid", "Akshay Bhagat", "Shubham More"]
    }
  ]

  getTeamdetails(){

    let promise = new Promise((resolve, reject) => {
      this.http.get(this.URL_teamDetails, { responseType: 'text' }).pipe(map((res: any) => res.toString())).subscribe((data: any) => {
        const json = JSON.parse(data.substr(47).slice(0, -2));
        resolve(json.table.rows)
      });
    });
    return promise;
  }

  getSheetData() {

    let promise = new Promise((resolve, reject) => {
      this.http.get(this.apiUrl, { responseType: 'text' }).pipe(map((res: any) => res.toString())).subscribe((data: any) => {
        const json = JSON.parse(data.substr(47).slice(0, -2));
        resolve(json.table.rows)
      });
    });
    return promise;

  }

  // fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json`)
  //   .then(res => res.text())
  //   .then(text => {
  //       const json = JSON.parse(text.substr(47).slice(0, -2))
  //   })

  getTeamDeda() {
    return this.Teamdetails
  }

  constructor(private http: HttpClient) { }
}
