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
        if (s.Team_ID == team.toString() && this.TodaysDate == TeamSubmissionDate && s.Pass_Code==passcode) {
          return true;
        } else {
          return false;
        }
      });
      console.log("Filtered Team==>",this.filterdTeam)
      if (this.filterdTeam.length >=1) {
        let tempArray = []
        this.filterdTeam.forEach(element=>{
          let index=tempArray.findIndex(i => i.team_type ==element.team_type);
          console.log(index);
          if(index!=-1){
            tempArray[index]=element;
          }else{
            console.log("pushed");
            tempArray.push(element);
            
          }
        })
        console.log("tempm Aeeay",tempArray)
        return tempArray
      } else {
        return this.filterdTeam
      }
    }

  }

}
