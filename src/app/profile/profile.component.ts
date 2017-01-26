import {Component, OnInit, OnDestroy, AfterContentInit} from '@angular/core';
import { DataService } from '../shared';
import { Auth }              from './../shared/auth.service'; 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit, OnDestroy, AfterContentInit {
  profile: any;
  quote: any;

  constructor(private dataService: DataService,private auth: Auth) {
  }

  ngOnInit(): void {
    console.log('ngOnInit() called');
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.dataService
      .getSecretQuote()
      .subscribe(
        data => this.quote = data,
        err => this.quote = 'No connection to backend...'
      );
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy() called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }
}
