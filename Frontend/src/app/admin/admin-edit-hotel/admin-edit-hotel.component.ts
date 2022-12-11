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
  hotelUpdated = false;
  id = '';
  currentHotel = {
    name: '',
    totalRooms: '',
    imageUrl: '',
    location: '',
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
          this.currentHotel.name = res.name;
          this.currentHotel.totalRooms = res.totalRooms;
          this.currentHotel.location = res.location;
          this.currentHotel.imageUrl = res.imageUrl;
          this.addHotelForm.setValue(this.currentHotel);
        },
        err => { }
      );
    }
  }
  onSubmitForm(data) {
    console.log('data', data);

    console.log(data.form.value);
    this.adminService.updateHotelByAdmin(data.form.value, this.id).subscribe(
      res => {
        this.hotelUpdated = true;
        this.error = '';
      },
      err => this.error = err.error.err
    );
  }
}
