import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AuthWelcomeComponent } from './auth-welcome/auth-welcome.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { HotelsComponent } from './hotels/hotels.component';
import { VisitedPlacesComponent } from './visited-places/visited-places.component';
import { CharDhamComponent } from './char-dham/char-dham.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OtherPlacesComponent } from './other-places/other-places.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminAddCharDhamComponent } from './admin/admin-add-char-dham/admin-add-char-dham.component';
import { AdminAddHotelsComponent } from './admin/admin-add-hotels/admin-add-hotels.component';
import { AdminAddOtherPlacesComponent } from './admin/admin-add-other-places/admin-add-other-places.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminAllPlacesComponent } from './admin/admin-all-places/admin-all-places.component';


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
    AdminAddOtherPlacesComponent,
    AdminProfileComponent,
    AdminAllPlacesComponent
  ],
  imports: [HttpClientModule, BrowserModule, ReactiveFormsModule, FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
