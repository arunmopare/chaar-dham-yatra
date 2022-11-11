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
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
