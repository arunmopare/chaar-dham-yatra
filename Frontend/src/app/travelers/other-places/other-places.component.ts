import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Place } from 'src/app/utils/interface/place';

@Component({
  selector: 'app-other-places',
  templateUrl: './other-places.component.html',
  styleUrls: ['./other-places.component.scss'],
})
export class OtherPlacesComponent implements OnInit {
  currentPlaces: Place[] = [];
  otherPlaces: Place[] = [];
  search: '';
  constructor(private adminService: AdminService) { }
  ngOnInit() {
    this.adminService.getSearchedPlaces(undefined).subscribe(
      res => {
        this.currentPlaces = res;
        this.otherPlaces = this.currentPlaces.filter(place => place.isCharDham === false);
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
          this.otherPlaces = this.currentPlaces.filter(place => place.isCharDham === false);
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
