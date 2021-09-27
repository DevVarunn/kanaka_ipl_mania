import { Component, OnInit } from '@angular/core';
import { TeamdetailsService } from '../Services/teamdetails.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  todaysTeam: any
  popUpSelectedTeam: any;
  teamname: any;
  googleFormTeamDetails: any;
  passcode: any;
  maxPoint


  constructor(private _TeamdetailsService: TeamdetailsService) { }

  ngOnInit(): void {
    this.getData();
    this.getTeamdetails()
  }

  getTeamdetails() {


    this._TeamdetailsService.getTeamdetails().then((res: any) => {
      let x = []
      for (var team of res) {

        let y = {
          "Team_Id": team.c[1].f,
          "Team_Name": team.c[2].v,
          "Team_Points": team.c[3].v,
          "Team_Logo": team.c[4].v,
          "Team_Members": team.c[5].v.split(','),
          "Pass_Code": team.c[6].v
        }
        x.push(y)
      }
      this.googleFormTeamDetails = x.sort((a, b) => {
        return b.Team_Points - a.Team_Points;
      });
      this.getMax()
    })
    this._TeamdetailsService.setTeamDetails(this.googleFormTeamDetails)



  }

  getMax() {
    this.maxPoint = Math.max.apply(Math, this.googleFormTeamDetails.map(function (o) {
      return o.Team_Points;
    }));
    console.log('max', this.maxPoint);
  }



  getData() {
    this.todaysTeam = [];
    this._TeamdetailsService.getSheetData().then((res: any) => {

      let x = [];
      for (var team of res) {
        let y = {
          "TIME_STAMP": team.c[0].f,
          "Team_ID": team.c[1].v.split(' ')[0],
          "Team_MOM": team.c[2].v,
          "Team_BTS": team.c[3].v,
          "Team_BOW": team.c[4].v,
          "Pass_Code": team.c[6].v
        }
        x.push(y)
      }
      this.todaysTeam = x;
    })

  }

}
