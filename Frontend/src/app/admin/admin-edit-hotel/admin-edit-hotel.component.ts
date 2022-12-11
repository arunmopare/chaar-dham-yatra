import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Hotel } from 'src/app/utils/interface/place';

@Component({
  selector: 'app-admin-edit-hotel',
  templateUrl: './admin-edit-hotel.component.html',
  styleUrls: ['./admin-edit-hotel.component.scss'],
})
export class AdminEditHotelComponent implements OnInit {
  @ViewChild('addHotelForm', { static: false }) addHotelForm: NgForm;
  error = '';
  hotelAdded = false;
  id = '';
  currentHotel: Hotel = {
    name: '',
    _id: this.id,
    totalRooms: '',
    roomsAvailable: '',
    imageUrl: '',
    location: '',
    id: this.id
  };
  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.id = params.id);
    console.log(this.id);
    this.loadCurrentHotelData(this.id);
  }
  loadCurrentHotelData(id) {
    if (id) {
      this.adminService.getHotelById(id).subscribe(
        res => {
          this.currentHotel = res;
          this.addHotelForm.value.name = this.currentHotel.name;
        },
        err => { }
      );
    }
  }
  onSubmitForm(data) {
    if (data.form.status === 'VALID') {
      console.log(data.form.value);
      // this.adminService.createHotelByAdmin(data.form.value).subscribe(
      //   res => {
      //     this.hotelAdded = true;
      //     this.error = '';
      //     this.addHotelForm.resetForm();
      //   },
      //   err => this.error = err.error.err
      // );
    }
  }

}
