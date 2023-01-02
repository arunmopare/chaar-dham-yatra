import { Component, OnInit } from '@angular/core';
import { Booking, Hotel } from 'src/app/utils/interface/place';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-all-hotels',
  templateUrl: './admin-all-hotels.component.html',
  styleUrls: ['./admin-all-hotels.component.scss'],
})
export class AdminAllHotelsComponent implements OnInit {
  presentingElement = null;
  bookings: Booking[];
  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    this.presentingElement = document.querySelector('.ion-page');
    this.getAllBooking();
  }

  getAllBooking() {
    this.adminService.getAllBookings('all').subscribe(
      res => {
        console.log(res);
        this.bookings = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  approve(booking: Booking) {
    booking.isConfirmed = true;
    this.adminService.updateBooking(booking).subscribe(
      res => {
        this.getAllBooking();
      },
      err => {
        console.log(err);
      }
    );
  }
  reject(booking: Booking) {
    booking.isConfirmed = false;
    this.adminService.updateBooking(booking).subscribe(
      res => {
        this.getAllBooking();
      },
      err => {
        console.log(err);
      }
    );
  }
}
