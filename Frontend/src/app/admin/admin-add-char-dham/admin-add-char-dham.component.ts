import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-add-char-dham',
  templateUrl: './admin-add-char-dham.component.html',
  styleUrls: ['./admin-add-char-dham.component.scss'],
})

export class AdminAddCharDhamComponent implements OnInit {
  @ViewChild('addPlaceForm', { static: false }) addPlaceForm: NgForm;

  error = '';
  placeAdded = false;
  constructor(private adminService: AdminService) { }

  ngOnInit() { }
  onSubmitForm(data) {
    if (data.form.status === 'VALID') {
      this.adminService.createPlaceByAdmin(data.form.value).subscribe(
        res => {
          this.placeAdded = true;
          this.error = '';
          this.addPlaceForm.resetForm();
        },
        err => this.error = err.error.err
      );
    }
  }
}
