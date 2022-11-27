import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINT } from '../constants/api.constant';
import { Traveler } from '../interface/traveler';
@Injectable({
  providedIn: 'root'
})
export class TravelerService {
  apiEndpoint = API_ENDPOINT;
  registerEndpoint = this.apiEndpoint + '/traveler/signup';
  loginEndpoint = this.apiEndpoint + '/traveler/signin';

  constructor(private http: HttpClient) { }
  travelerRegistration(data: Traveler) {
    return this.http.post<any>(this.registerEndpoint, data);
  }
  travelerLogin(data: Traveler) {
    return this.http.post<any>(this.loginEndpoint, data);
  }
}
