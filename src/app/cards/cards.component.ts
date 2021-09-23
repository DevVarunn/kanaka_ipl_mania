import { Component, OnInit } from '@angular/core';
import { TeamdetailsService } from '../Services/teamdetails.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  teamDetails: any
  todaysTeam = []
  popUpSelectedTeam: any;
  teamname: any;
  selectedTeam: any = {}
  headingName
  objSize
  constructor(private _TeamdetailsService: TeamdetailsService) { }

  ngOnInit(): void {
    this.teamDetails = this._TeamdetailsService.getTeamDeda().sort((a, b) => {
      return b.Team_Points - a.Team_Points;
    });
    this.getData();

  }

  update(team: any) {
    this.headingName = team
    console.log('selected ==>',team);
    this.selectedTeam = {}
    this.todaysTeam.forEach((item) => {
      console.log('conditional',item.Team_NAME.includes(team));
      
      if (item.Team_NAME.includes(team)) {
        this.selectedTeam = item
      }
    })

    this.objSize = Object.keys(this.selectedTeam).length
  }


  getData() {
    this._TeamdetailsService.getSheetData().then((res: any) => {
      // console.log(res);
      
      let x = [];
      let y
      for (var team of res) {

        y = {
          "TIME_STAMP": team.c[0].f,
          "Team_NAME": team.c[1].v,
          "Team_MOM": team.c[2].v,
          "Team_BTS": team.c[3].v,
          "Team_BOW": team.c[4].v
        }

        x.push(y)

      }
      console.log("Team Json todaysTeam ==>", x);
      this.todaysTeam = x;
    })

  }

}
