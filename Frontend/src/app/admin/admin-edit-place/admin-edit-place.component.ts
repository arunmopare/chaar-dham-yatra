import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Place } from 'src/app/utils/interface/place';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-edit-place',
  templateUrl: './admin-edit-place.component.html',
  styleUrls: ['./admin-edit-place.component.scss'],
})
export class AdminEditPlaceComponent implements OnInit {
  @ViewChild('addPlaceForm', { static: false }) addPlaceForm: NgForm;

  error = '';
  placeUpdated = false;
  currentPlace = {
    name: '',
    category: '',
    description: '',
    imageUrl: '',
    isCharDham: false,
    location: ''
  };
  id = '';
  constructor(private route: ActivatedRoute, private adminService: AdminService, private alertController: AlertController) {
    this.route.params.subscribe((params: Params) => this.id = params.id);

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.id = params.id);
    this.loadCurrentPlace(this.id);
  }
  loadCurrentPlace(id) {
    if (id) {
      this.adminService.getPlaceById(id).subscribe(
        res => {
          this.currentPlace.name = res.name;
          this.currentPlace.category = res.category;
          this.currentPlace.description = res.description;
          this.currentPlace.imageUrl = res.imageUrl;
          this.currentPlace.isCharDham = res.isCharDham;
          this.currentPlace.location = res.location;

          this.addPlaceForm.setValue(this.currentPlace);
        },
        err => { }
      );
    }
  }
  async onSubmitForm(data) {
    this.adminService.updatePlaceByAdmin(data.form.value, this.id).subscribe(
      async res => {
        await this.presentAlert();
        this.placeUpdated = true;
        this.error = '';
      },
      err => this.error = err.error.err
    );
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Message',
      message: 'Place Updated Successfully!',
      buttons: ['OK'],
    });
    await alert.present();
  }

}
