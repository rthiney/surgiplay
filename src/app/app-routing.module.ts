import { GownSizeComponent } from './admin/gown-size/gown-size.component';
import { GloveSizeComponent } from './admin/glove-size/glove-size.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { ProfileComponent } from './profile';
import { StaffComponent } from './staff/staff.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { SurgeriesComponent } from './surgeries/surgeries.component';
import { PrefCardComponent } from './pref-card/pref-card.component';


import { AuthGuard } from './shared/auth-guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about/:id', component: AboutComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'home', component: HomeComponent },
    { path: 'staff', component: StaffComponent, canActivate: [AuthGuard] },
    { path: 'prefcards', component: PrefCardComponent, canActivate: [AuthGuard] },
    { path: 'surgeries', component: SurgeriesComponent , canActivate: [AuthGuard]},
    { path: 'hospitals', component: HospitalsComponent, canActivate: [AuthGuard] },
  { path: 'glove-size', component: GloveSizeComponent },
   { path: 'gown-size', component: GownSizeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
