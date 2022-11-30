import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/interface/place';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-all-places',
  templateUrl: './admin-all-places.component.html',
  styleUrls: ['./admin-all-places.component.scss'],
})
export class AdminAllPlacesComponent implements OnInit {

  currentPlaces: Place[] = []
  search: '';

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getSearchedPlaces(undefined).subscribe(
      res => {
        this.currentPlaces = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  onSearchModified() {
    this.adminService.getSearchedPlaces(this.search).subscribe(
      res => {
        this.currentPlaces = res;
        console.log(this.currentPlaces);
      },
      err => {
        console.log(err);
      }
    )
  }

}
