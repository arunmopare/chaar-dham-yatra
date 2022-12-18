import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/utils/interface/place';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-all-places',
  templateUrl: './admin-all-places.component.html',
  styleUrls: ['./admin-all-places.component.scss'],
})
export class AdminAllPlacesComponent implements OnInit {

  currentPlaces: Place[] = [];
  search: '';
  constructor(private adminService: AdminService, private router: Router) { }
  getData = () => {
    this.adminService.getSearchedPlaces(undefined).subscribe(
      res => {
        this.currentPlaces = res;
      },
      err => {
        console.log(err);
      }
    );

  };

  ngOnInit() {
    this.getData();
  }

  onSearchModified() {
    if (this.search === '') {
      this.getData();
    } else {
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
  onInputChange(input) {
    if (this.search === '') {
      this.getData();
    } else {
      this.adminService.getSearchedPlaces(input).subscribe(
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
  deletePlace(id) {
    this.adminService.deletePlace(id).subscribe(
      res => {
        this.getData();
        console.log(this.currentPlaces);
      },
      err => {
        console.log(err);
      }
    );
  }
  editPlace(id) {
    console.log('edit clicked');

    this.router.navigateByUrl('/admin-edit-place/' + id);
  }
}
