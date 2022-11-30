import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Traveler } from '../interface/traveler';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) { }

  createTravelerSession(traveler: Traveler) {
    localStorage.setItem('TravelerSession', JSON.stringify(traveler));
    // localStorage.setItem('TravelerFirstName', traveler.firstName);
    // localStorage.setItem('TravelerLastName', traveler.lastName);
    // localStorage.setItem('TravelerEmail', traveler.email);
    // localStorage.setItem('TravelerId', traveler.userId);
    // localStorage.setItem('TravelerIdToken', traveler.auth.idToken);
    // localStorage.setItem('TravelerRefreshToken', traveler.auth.refreshToken);
  }
  getTravelerCurrentSession() {
    const session = localStorage.getItem('TravelerSession');
    return JSON.parse(session) as Traveler;
  }
  isTravelerLoggedIn() {
    const session = localStorage.getItem('TravelerSession');
    if (session) {
      const traveler: Traveler = JSON.parse(session);
      console.log('====================================');
      console.log(traveler);
      console.log('====================================');
      if (traveler.userId !== null) {
        return true;
      }
      return false;
    }
    return false;
  }
  logTravelerOut() {
    localStorage.removeItem('TravelerSession');
    this.router.navigateByUrl('login');
  }
}
