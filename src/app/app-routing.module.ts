import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateteamComponent } from './createteam/createteam.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JointeamComponent } from './jointeam/jointeam.component';

const routes: Routes = [
  { path: 'createteam', component: CreateteamComponent },
  { path: 'app-dashboard', component: DashboardComponent },
  { path: 'jointeam', component: JointeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
