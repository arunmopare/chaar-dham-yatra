import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Hotel } from 'src/app/utils/interface/place';

@Component({
  selector: 'app-admin-all-hotels-list',
  templateUrl: './admin-all-hotels-list.component.html',
  styleUrls: ['./admin-all-hotels-list.component.scss'],
})
export class AdminAllHotelsListComponent implements OnInit {



  currentHotels: Hotel[] = [];
  search: '';
  constructor(private adminService: AdminService, private router: Router) { }
  getData = () => {
    this.adminService.getSearchedHotels(undefined).subscribe(
      res => {
        this.currentHotels = res;
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
  editHotel(id) {
    this.router.navigateByUrl('/admin-edit-hotel/' + id);
  }
  onInputChange(input) {
    if (this.search === '') {
      this.getData();
    } else {
      this.adminService.getSearchedHotels(input).subscribe(
        res => {
          this.currentHotels = res;
        },
        err => {
          console.log(err);
        }
      );
    }
  }
  deleteHotel(id) {
    this.adminService.deleteHotel(id).subscribe(
      res => {
        this.getData();
      },
      err => {
        console.log(err);
      }
    );
  }
}
