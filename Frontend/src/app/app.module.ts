import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './travelers/home/home.component';
import { AuthWelcomeComponent } from './common/auth-welcome/auth-welcome.component';
import { ForgotPasswordComponent } from './travelers/forgot-password/forgot-password.component';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';
import { NavComponent } from './common/nav/nav.component';
import { HotelsComponent } from './travelers/hotels/hotels.component';
import { VisitedPlacesComponent } from './travelers/visited-places/visited-places.component';
import { CharDhamComponent } from './travelers/char-dham/char-dham.component';
import { MyProfileComponent } from './travelers/my-profile/my-profile.component';
import { OtherPlacesComponent } from './travelers/other-places/other-places.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminAddCharDhamComponent } from './admin/admin-add-char-dham/admin-add-char-dham.component';
import { AdminAddHotelsComponent } from './admin/admin-add-hotels/admin-add-hotels.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminAllPlacesComponent } from './admin/admin-all-places/admin-all-places.component';
import { AdminAllHotelsComponent } from './admin/admin-all-hotels/admin-all-hotels.component';
import { AdminEditHotelComponent } from './admin/admin-edit-hotel/admin-edit-hotel.component';
import { AdminAllHotelsListComponent } from './admin/admin-all-hotels-list/admin-all-hotels-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthWelcomeComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    HotelsComponent,
    VisitedPlacesComponent,
    CharDhamComponent,
    MyProfileComponent,
    OtherPlacesComponent,
    AdminDashboardComponent,
    AdminAddCharDhamComponent,
    AdminAddHotelsComponent,
    AdminProfileComponent,
    AdminAllPlacesComponent,
    AdminAllHotelsComponent,
    AdminAddHotelsComponent,
    AdminEditHotelComponent,
    AdminAllHotelsListComponent,
    AdminAllHotelsComponent
  ],
  imports: [HttpClientModule, BrowserModule, ReactiveFormsModule, FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
