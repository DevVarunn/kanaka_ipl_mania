import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getteaminfo'
})
export class GetteaminfoPipe implements PipeTransform {


  transform( value: any, team: any ): any {

    return  team.filter((s: any) => s.Team_Name.includes(value));
     
  }

}
