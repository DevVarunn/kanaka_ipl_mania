import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getteaminfo'
})
export class GetteaminfoPipe implements PipeTransform {

  TodaysDate = new Date().setHours(0, 0, 0, 0);

  transform(value: any, team: any): any {
    if (!value || !team) {
      return
    }
    else {

      return value.filter((s: any) => {
        let TeamSubmissionDate = new Date(s.TIME_STAMP).setHours(0, 0, 0, 0);
        if (s.Team_ID == team.toString() && this.TodaysDate == TeamSubmissionDate) {
          return true;
        } else {
          return false;
        }
      });
    }

  }

}
