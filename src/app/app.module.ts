import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';


import { HttpClientModule } from '@angular/common/http';
import { GetteaminfoPipe } from './Pipes/getteaminfo.pipe';
import { TeamMatchPipe } from './Pipes/team-match.pipe';
import { CreateteamComponent } from './createteam/createteam.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JointeamComponent } from './jointeam/jointeam.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    GetteaminfoPipe,
    TeamMatchPipe,
    CreateteamComponent,
    DashboardComponent,
    NavbarComponent,
    JointeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
