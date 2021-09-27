import { Pipe, PipeTransform } from '@angular/core';
import { TeamdetailsService } from '../Services/teamdetails.service';

@Pipe({
  name: 'getteaminfo'
})
export class GetteaminfoPipe implements PipeTransform {


  constructor(private _TeamdetailsService: TeamdetailsService) { }
  teamdetails: any = this._TeamdetailsService.getTeamdetailsFromService

  filterdTeam

  TodaysDate = new Date().setHours(0, 0, 0, 0);

  transform(value: any, team: any): any {
    if (!value || !team) {
      return
    }
    else {

      this.filterdTeam = value.filter((s: any) => {
        let TeamSubmissionDate = new Date(s.TIME_STAMP).setHours(0, 0, 0, 0);
        if (s.Team_ID == team.toString() && this.TodaysDate == TeamSubmissionDate) {

          this.teamdetails.forEach(element => {

          });

          return true;
        } else {
          return false;
        }
      });

      if (this.filterdTeam.length > 1) {
        let tempArray = []
        tempArray.push(this.filterdTeam[this.filterdTeam.length - 1])
        console.log('tempArray', tempArray);
        return tempArray

        // return this.filterdTeam[this.filterdTeam.length - 1]
      } else {
        console.log('log', this.filterdTeam);

        return this.filterdTeam
      }
    }

  }

}
