import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT } from '../constants/api.constant';
import { Traveler } from '../interface/traveler';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiEndpoint = API_ENDPOINT;
  logInEndpoint = this.apiEndpoint + 'login';

  constructor(private http: HttpClient) { }

  travelerRegistration(data: Traveler) {
    return this.http.post<any>(this.logInEndpoint, data);
  }
}
