import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';
import { Booking, Hotel } from 'src/app/utils/interface/place';
import { Traveler } from 'src/app/utils/interface/traveler';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  bookings: Booking[] = [];
  presentingElement = null;
  age;
  bookClicked = false;
  currentHotels: Hotel[] = [];
  search: '';
  traveler: Traveler;
  constructor(private adminService: AdminService, private sessionService: SessionService, private alertController: AlertController,) { }
  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.getData();
    this.traveler = this.sessionService.getTravelerCurrentSession();
    this.getAllBooking(this.traveler.userId);
  }

  toggleBookClicked() {
    this.bookClicked = !this.bookClicked;
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

  async presentAlert(name, id, available) {
    const alert = await this.alertController.create({

      header: 'Booking room at ' + name + ' Hotel',
      buttons: [{
        text: 'Request for Rooms',
        handler: (data) => {
          data.userId = this.traveler.userId;
          data.hotelId = id;
          data.hotelName = name;
          console.log('data bedore', data);
          if (data) {
            this.postBooking(data);
          }
        }
      }],
      inputs: [
        {
          placeholder: 'Name',
          name: 'userName',
          value: this.traveler.firstName + ' ' + this.traveler.lastName,
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          name: 'numberOfRooms',
          placeholder: 'No of rooms ' + '( ' + available + ' Available)',
          value: this.age,
          min: 1,
          max: 100,
        },
        {
          type: 'date',
          name: 'fromDate',
          placeholder: 'from date',
          label: 'from date'
        },
        {
          type: 'date',
          name: 'toDate',
          placeholder: 'from date',
        }
      ],
    });

    await alert.present();
    console.log(this.age);

  }

  postBooking(data) {
    this.adminService.addBooking(data).subscribe(
      res => {
        console.log(res);
        this.getAllBooking(this.traveler.userId);
      },
      err => {
        console.log(err);
      }
    );
  }
  getAllBooking(userId) {
    this.adminService.getAllBookings(userId).subscribe(
      res => {
        console.log(res);
        this.bookings = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
