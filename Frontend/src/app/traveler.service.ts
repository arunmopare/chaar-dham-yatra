import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINT } from './constants/api.constant';
import { Traveler } from './interface/traveler';

@Injectable({
  providedIn: 'root'
})
export class TravelerService {
  apiEndpoint = API_ENDPOINT;
  logInEndpoint = this.apiEndpoint + '/traveler/signup';

  constructor(private http: HttpClient) { }
  travelerRegistration(data: Traveler) {
    return this.http.post<any>(this.logInEndpoint, data);
  }
}
