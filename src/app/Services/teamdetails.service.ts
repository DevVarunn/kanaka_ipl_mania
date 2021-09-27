import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TeamdetailsService {
  apiUrl = 'https://docs.google.com/spreadsheets/d/1DHxB7wGNX7EJ8_XrQR3HAHMjhxq2ziBax-7y1NzKrpE/gviz/tq?tqx=out:json'

  URL_teamDetails = 'https://docs.google.com/spreadsheets/d/17QODL8aJoJeHrcVJt3BqecEVxa2oA9hKc1y0CTYhVwY/gviz/tq?tqx=out:json'

  googleFormTeamDetails : any
  selectedTeamPasscode 

  setTeamDetails(team){
    this.googleFormTeamDetails = team
  }
  getTeamdetailsFromService(){
    return  this.googleFormTeamDetails
  }

  setSelectedTeamPassCode(passcode){
    
    this.selectedTeamPasscode= passcode 
    console.log('getpass',this.selectedTeamPasscode);

  }

  getSelectedTeamPassCode(){
    return this.selectedTeamPasscode 
  }




  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
  };



  getTeamdetails(){

    let promise = new Promise((resolve, reject) => {
      this.http.get(this.URL_teamDetails, { responseType: 'text' }).pipe(map((res: any) => res.toString())).subscribe((data: any) => {
        const json = JSON.parse(data.substr(47).slice(0, -2));
        resolve(json.table.rows)
      });
    });
    
    return promise;
  }

  getSheetData() {

    let promise = new Promise((resolve, reject) => {
      this.http.get(this.apiUrl, { responseType: 'text' }).pipe(map((res: any) => res.toString())).subscribe((data: any) => {
        const json = JSON.parse(data.substr(47).slice(0, -2));
        resolve(json.table.rows)
      });
    });
    return promise;

  }

  // fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json`)
  //   .then(res => res.text())
  //   .then(text => {
  //       const json = JSON.parse(text.substr(47).slice(0, -2))
  //   })


  constructor(private http: HttpClient) { }
}
