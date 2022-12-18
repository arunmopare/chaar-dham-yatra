import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Hotel } from 'src/app/utils/interface/place';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  currentHotels: Hotel[] = [];
  search: '';
  constructor(private adminService: AdminService, private router: Router) { }
  ngOnInit() {
    this.getData();
  }

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

  bookHotel(id) {
    // this.router.navigateByUrl('/admin-edit-hotel/' + id);
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

  viewInMaps(id) {
    // this.adminService.deleteHotel(id).subscribe(
    //   res => {
    //     this.getData();
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }

}
