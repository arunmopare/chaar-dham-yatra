import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthWelcomeComponent } from './auth-welcome/auth-welcome.component';
import { CharDhamComponent } from './char-dham/char-dham.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { VisitedPlacesComponent } from './visited-places/visited-places.component';
import { RegisterComponent } from './register/register.component';
import { OtherPlacesComponent } from './other-places/other-places.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'welcome',
    component: AuthWelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'hotels',
    component: HotelsComponent
  },
  {
    path: 'visited-places',
    component: VisitedPlacesComponent
  },
  {
    path: 'char-dham',
    component: CharDhamComponent
  },
  {
    path: 'my-profile',
    component: MyProfileComponent
  },
  {
    path: 'other-places',
    component: OtherPlacesComponent
  },
  // admin
  {
    path: 'admin-home',
    component: AdminDashboardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
