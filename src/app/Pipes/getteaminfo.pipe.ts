import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'getteaminfo'
})
export class GetteaminfoPipe implements PipeTransform {


  constructor() { }
  filterdTeam:any[]=[];
  TodaysDate = new Date().setHours(0, 0, 0, 0);

  transform(value: any, team: any,passcode:any): any {
    if (!value || !team) {
      return
    }
    else {

      this.filterdTeam = value.filter((s: any) => {
        let TeamSubmissionDate = new Date(s.TIME_STAMP).setHours(0, 0, 0, 0);
        console.log(s.Team_ID,team,s.Pass_Code,passcode);
        if (s.Team_ID == team.toString() && this.TodaysDate == TeamSubmissionDate && s.Pass_Code==passcode) {
          return true;
        } else {
          return false;
        }
      });
      console.log("Filtered Team==>",this.filterdTeam)
      if (this.filterdTeam.length > 1) {
        let tempArray = []
        tempArray.push(this.filterdTeam[this.filterdTeam.length - 1])
        console.log('tempArray', tempArray);
        return tempArray
      } else {
        console.log('log', this.filterdTeam);

        return this.filterdTeam
      }
    }

  }

}
