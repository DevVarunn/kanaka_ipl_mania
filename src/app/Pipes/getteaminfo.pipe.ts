import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getteaminfo'
})
export class GetteaminfoPipe implements PipeTransform {

  filterdTeam

  TodaysDate = new Date().setHours(0, 0, 0, 0);

  transform(value: any, team: any): any {
    if (!value || !team) {
      return
    }
    else {

      this.filterdTeam =  value.filter((s: any) => {
        let TeamSubmissionDate = new Date(s.TIME_STAMP).setHours(0, 0, 0, 0);
        if (s.Team_ID == team.toString() && this.TodaysDate == TeamSubmissionDate) {
          return true;
        } else {
          return false;
        }
      });

      if(this.filterdTeam.length > 1) {
        let tempArray = []
        tempArray.push(this.filterdTeam[this.filterdTeam.length - 1])
        console.log(tempArray);
        return tempArray
        
        return this.filterdTeam[this.filterdTeam.length - 1]
      }else{
        console.log(this.filterdTeam);
        
        return this.filterdTeam
      }
    }

  }

}
