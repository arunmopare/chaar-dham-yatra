import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Place } from 'src/app/utils/interface/place';

@Component({
  selector: 'app-char-dham',
  templateUrl: './char-dham.component.html',
  styleUrls: ['./char-dham.component.scss'],
})
export class CharDhamComponent implements OnInit {
  currentPlaces: Place[] = [];
  charDhamPlaces: Place[] = [];
  search: '';

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getSearchedPlaces(undefined).subscribe(
      res => {
        this.currentPlaces = res;
        this.charDhamPlaces = this.currentPlaces.filter(place => place.isCharDham === true);
      },
      err => {
        console.log(err);
      }
    );
  }
  onSearchModified() {
    if (this.search === '') {
      this.adminService.getSearchedPlaces(undefined).subscribe(
        res => {
          this.currentPlaces = res;
          this.charDhamPlaces = this.currentPlaces.filter(place => place.isCharDham === true);
        },
        err => {
          console.log(err);
        }
      );
    }
    else {
      this.adminService.getSearchedPlaces(this.search).subscribe(
        res => {
          this.currentPlaces = res;
          console.log(this.currentPlaces);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
