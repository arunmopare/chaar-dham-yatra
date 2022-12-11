import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINT } from '../utils/constants/api.constant';
import { Hotel, Place } from '../utils/interface/place';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiEndpoint = API_ENDPOINT;
  placeEndpoint = this.apiEndpoint + '/admin/place';
  hotelEndpoint = this.apiEndpoint + '/admin/hotel';
  getPlacesEndpoint = this.apiEndpoint + '/admin/places';
  getHotelsEndpoint = this.apiEndpoint + '/admin/hotels';
  getTotalEndpoint = this.apiEndpoint + '/admin/total';

  constructor(private http: HttpClient) { }

  createPlaceByAdmin(data: Place) {
    return this.http.post<any>(this.placeEndpoint, data);
  }
  createHotelByAdmin(data: Hotel) {
    return this.http.post<any>(this.hotelEndpoint, data);
  }
  getAllPlaces() {
    return this.http.get<any>(this.getPlacesEndpoint);
  }
  getSearchedPlaces(search) {
    return this.http.get<any>(this.getPlacesEndpoint + '/' + search);
  }
  deletePlace(id) {
    return this.http.delete<any>(this.placeEndpoint + '/' + id);
  }
  deleteHotel(id) {
    return this.http.delete<any>(this.hotelEndpoint + '/' + id);
  }
  getAllHotels() {
    return this.http.get<any>(this.getHotelsEndpoint);
  }
  getSearchedHotels(search) {
    return this.http.get<any>(this.getHotelsEndpoint + '/' + search);
  }
  getTotal() {
    return this.http.get<any>(this.getTotalEndpoint);
  }

}
