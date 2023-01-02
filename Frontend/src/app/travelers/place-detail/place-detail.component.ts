import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Place } from 'src/app/utils/interface/place';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss'],
})
export class PlaceDetailComponent implements OnInit {
  id = '';
  currentPlace: Place;
  constructor(private adminService: AdminService, private route: ActivatedRoute,) { }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.id = params.id);
    this.loadCurrentPlace(this.id);
  }
  loadCurrentPlace(id) {
    if (id) {
      this.adminService.getPlaceById(id).subscribe(
        res => {
          this.currentPlace = res;
        },
        err => { }
      );
    }
  }
}
