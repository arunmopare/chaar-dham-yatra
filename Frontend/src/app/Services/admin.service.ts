import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINT } from '../constants/api.constant';
import { Place } from '../interface/place';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiEndpoint = API_ENDPOINT;
  placeEndpoint = this.apiEndpoint + '/admin/place';
  getPlacesEndpoint = this.apiEndpoint + '/admin/places';

  constructor(private http: HttpClient) { }

  createPlaceByAdmin(data: Place) {
    return this.http.post<any>(this.placeEndpoint, data);
  }
  getAllPlaces() {
    return this.http.get<any>(this.getPlacesEndpoint);
  }
  getSearchedPlaces(search) {
    return this.http.get<any>(this.getPlacesEndpoint + '/' + search);
  }

}
