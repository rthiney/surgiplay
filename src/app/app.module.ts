
import { AuthGuard } from './shared/auth-guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
 import { AuthHttp, AuthConfig } from 'angular2-jwt';
import {MaterializeDirective} from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';

import { AboutComponent } from './about';
import { ProfileComponent } from './profile';
import { GloveSizeComponent, GownSizeComponent } from './admin';
import { NoContentComponent } from './no-content';
import { HomeComponent } from './home';
import { StaffComponent } from './staff/staff.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { SurgeriesComponent } from './surgeries/surgeries.component';
import { PrefCardComponent } from './pref-card/pref-card.component';
import { GloveSize, GownSize } from './models';
import { GloveSizeService } from './admin/glove-size/glove-size.service';
import { GownSizeService } from './admin/gown-size/gown-size.service';


//Shared
import { ParamDropdownComponent } from './shared/components/parameters.component';

import { DataService } from './shared';


//PRIMNG
// import {MomentModule} from 'angular2-moment';
//  import {TooltipModule} from 'primeng/primeng';
//  import {CalendarModule} from 'primeng/primeng';
@NgModule({
  declarations: [
      MaterializeDirective,
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
     GloveSizeComponent,
    GownSizeComponent,
    ParamDropdownComponent,
    HomeComponent,
    NoContentComponent,
    StaffComponent,
    HospitalsComponent,
    SurgeriesComponent,
    PrefCardComponent,
    GloveSizeComponent,
  GownSizeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //     MomentModule,
    // TooltipModule,
    // CalendarModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: AuthConfig,
      useFactory: () => {
        return new AuthConfig();
      },
      deps: [Http]
    },
    AuthHttp,
    AuthGuard,
    DataService,
    GloveSizeService, GownSizeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
