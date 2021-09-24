import { Component, OnInit } from '@angular/core';
import { TeamdetailsService } from '../Services/teamdetails.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  teamDetails : any
  todaysTeam : any
  popUpSelectedTeam : any;
  teamname:any;
  

  constructor(private _TeamdetailsService : TeamdetailsService) { }

  ngOnInit(): void {
    this.teamDetails = this._TeamdetailsService.getTeamDeda().sort((a, b) => {
      return b.Team_Points - a.Team_Points;
    });
    this.getData();

  }


  getData(){
    this.todaysTeam=[];
    this._TeamdetailsService.getSheetData().then((res:any)=>{
      let x=[];
      for (var team of res){
        let y={ 
   "TIME_STAMP":team.c[0].f,
		"Team_ID":team.c[1].v.split(' ')[0],
    "Team_MOM":team.c[2].v,
    "Team_BTS": team.c[3].v,
    "Team_BOW": team.c[4].v}

  

        x.push(y)

      }
      console.log("Team Json todaysTeam ==>", x);
      this.todaysTeam = x;
    })

  }

}
