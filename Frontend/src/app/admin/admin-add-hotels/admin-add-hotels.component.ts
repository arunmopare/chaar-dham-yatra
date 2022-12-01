import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-add-hotels',
  templateUrl: './admin-add-hotels.component.html',
  styleUrls: ['./admin-add-hotels.component.scss'],
})
export class AdminAddHotelsComponent implements OnInit {
  @ViewChild('addHotelForm', { static: false }) addHotelForm: NgForm;

  error = '';
  hotelAdded = false;
  constructor(private adminService: AdminService) { }

  ngOnInit() { }

  onSubmitForm(data) {
    if (data.form.status === 'VALID') {
      this.adminService.createHotelByAdmin(data.form.value).subscribe(
        res => {
          this.hotelAdded = true;
          this.error = '';
          this.addHotelForm.resetForm();
        },
        err => this.error = err.error.err
      );
    }
  }

}
