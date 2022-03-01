import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UrlMapping } from '../UrlMapping';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  sendOTP(email: any) {
    return this.http.post(environment.baseUrl + UrlMapping.sendOTP, email)
  }

  createTeam(team: any) {
    return this.http.post(environment.baseUrl + UrlMapping.createTeam, team)
  }

  verifyEmail(email: any) {
    return this.http.post(environment.baseUrl + UrlMapping.verifyEmail, email)
  }

  registerUser(body) {
    return this.http.post(environment.baseUrl + UrlMapping.registerUser, body)
  }


  constructor(private http: HttpClient) { }
}


