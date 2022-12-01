import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/interface/place';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-all-hotels',
  templateUrl: './admin-all-hotels.component.html',
  styleUrls: ['./admin-all-hotels.component.scss'],
})
export class AdminAllHotelsComponent implements OnInit {

  currentHotels: Hotel[] = [];
  search: '';
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getSearchedHotels(undefined).subscribe(
      res => {
        this.currentHotels = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  onSearchModified() {
    if (this.search === '') {
      this.adminService.getSearchedHotels(undefined).subscribe(
        res => {
          this.currentHotels = res;
        },
        err => {
          console.log(err);
        }
      );
    }
    this.adminService.getSearchedHotels(this.search).subscribe(
      res => {
        this.currentHotels = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}