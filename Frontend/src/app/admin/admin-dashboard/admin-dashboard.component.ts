import { Component, OnInit } from '@angular/core';
import { Total } from 'src/app/interface/place';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  total: Total = { totalHotels: '0', totalPlaces: '0', totalTravelers: '0' };
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getTotal().subscribe(
      res => this.total = res,
      err => {
        this.total = { totalHotels: '0', totalPlaces: '0', totalTravelers: '0' };
      }
    );
  }

}
