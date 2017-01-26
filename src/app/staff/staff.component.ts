import { Component, OnInit } from '@angular/core';
import {MaterializeDirective} from 'angular2-materialize';
import { ParamDropdownComponent } from './../shared/components/parameters.component';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit { 
  constructor() { } 
  ngOnInit() {
    console.log('Staff page loaded');
  }

}
