import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teamMatch'
})
export class TeamMatchPipe implements PipeTransform {

  transform(value: any): any {
    return value==1?"Afternoon Match (3:30 PM) ":"Evening Match (6:30 PM)"
}
}
