import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/utils/interface/place';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-all-hotels',
  templateUrl: './admin-all-hotels.component.html',
  styleUrls: ['./admin-all-hotels.component.scss'],
})
export class AdminAllHotelsComponent implements OnInit {
  ngOnInit(): void {
  }
}
