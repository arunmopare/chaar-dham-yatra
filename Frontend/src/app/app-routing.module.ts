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
import { AdminAddCharDhamComponent } from './admin/admin-add-char-dham/admin-add-char-dham.component';
import { AdminAddOtherPlacesComponent } from './admin/admin-add-other-places/admin-add-other-places.component';
import { AdminAddHotelsComponent } from './admin/admin-add-hotels/admin-add-hotels.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { TravelerAuthGuard } from './Services/traveler-auth.guard';
import { AdminAuthGuard } from './Services/admin-auth.guard';
import { AdminAllPlacesComponent } from './admin/admin-all-places/admin-all-places.component';
import { AdminAllHotelsComponent } from './admin/admin-all-hotels/admin-all-hotels.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    canActivate: [TravelerAuthGuard],
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
    canActivate: [TravelerAuthGuard],
    path: 'hotels',
    component: HotelsComponent
  },
  {
    canActivate: [TravelerAuthGuard],
    path: 'visited-places',
    component: VisitedPlacesComponent
  },
  {
    canActivate: [TravelerAuthGuard],
    path: 'char-dham',
    component: CharDhamComponent
  },
  {
    canActivate: [TravelerAuthGuard],
    path: 'my-profile',
    component: MyProfileComponent
  },
  {
    canActivate: [TravelerAuthGuard],
    path: 'other-places',
    component: OtherPlacesComponent
  },
  // admin
  {
    canActivate: [AdminAuthGuard],
    path: 'admin-home',
    component: AdminDashboardComponent
  },
  {
    canActivate: [AdminAuthGuard],
    path: 'admin-add-char-dham',
    component: AdminAddCharDhamComponent
  },
  {
    canActivate: [AdminAuthGuard],
    path: 'admin-add-other-places',
    component: AdminAddOtherPlacesComponent
  },
  {
    canActivate: [AdminAuthGuard],
    path: 'admin-add-hotels',
    component: AdminAddHotelsComponent
  },
  {
    canActivate: [AdminAuthGuard],
    path: 'admin-profile',
    component: AdminProfileComponent
  },
  {
    canActivate: [AdminAuthGuard],
    path: 'admin-all-places',
    component: AdminAllPlacesComponent
  },
  {
    canActivate: [AdminAuthGuard],
    path: 'admin-all-hotels',
    component: AdminAllHotelsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
