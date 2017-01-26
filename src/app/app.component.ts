 
import { Component, NgZone } from '@angular/core';
import { Location } from '@angular/common';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';
import { Auth }              from './shared/auth.service';  
 import {MaterializeDirective} from 'angular2-materialize';
declare var Auth0Lock;

@Component({
  selector: 'app-root',
 providers: [ Auth ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lock = new Auth0Lock('HWaGPswDnLy5BUO4DyJbNWCBfG5VqkCp', 'surgipal.auth0.com');
  // jwtHelper: JwtHelper = new JwtHelper();
  isDarkTheme: boolean = false;
  //Store profile object in auth class
  userProfile: any;
  constructor(
    private auth: Auth,
    private router: Router,
    private location: Location,
    private ngZone: NgZone) {
 this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        profile.user_metadata = profile.user_metadata || {};
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });
    });
  }

//   login() {
//     let self = this;
//     this.lock.show((err: string, profile: string, id_token: string) => {
//       if (err) {
//         throw new Error(err);
//       }

//       localStorage.setItem('profile', JSON.stringify(profile));
//       localStorage.setItem('id_token', id_token);

//       console.log(
//         this.jwtHelper.decodeToken(id_token),
//         this.jwtHelper.getTokenExpirationDate(id_token),
//         this.jwtHelper.isTokenExpired(id_token)
//       );

//       self.ngZone.run(() => self.loggedIn());
//       self.router.navigate(['/profile']);
//     });
//   }

//   logout() {
//     localStorage.removeItem('profile');
//     localStorage.removeItem('id_token');

//     this.loggedIn();
//     this.router.navigate(['/']);
//   }

 // loggedIn() {
//     return tokenNotExpired();
//   }

//   isActive(path) {
//     return this.location.path() === path;
//   }
}

