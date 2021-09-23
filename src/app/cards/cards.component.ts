import { Component, OnInit } from '@angular/core';
import { TeamdetailsService } from '../teamdetails.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  teamDetails : any
  constructor(private _TeamdetailsService : TeamdetailsService) { }

  ngOnInit(): void {
    this.teamDetails = this._TeamdetailsService.getTeamDeda()
  }

}
