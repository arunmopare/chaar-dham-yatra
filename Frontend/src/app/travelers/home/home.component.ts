import { Component, OnInit } from '@angular/core';
import { Place } from '../../utils/interface/place';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  currentPlaces: Place[] = [];
  search: '';

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.adminService.getSearchedPlaces(undefined).subscribe(
      res => {
        this.currentPlaces = res;
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
  viewPlace(id) {
    this.router.navigateByUrl('/view-place/' + id);
  }
}
