import { Component, OnInit } from '@angular/core';
import {MaterializeDirective} from 'angular2-materialize';
@Component({
  selector: 'app-parameter-drop',
  template: `<select materialize="material_select" [materializeSelectOptions]="selectOptions">
  <option *ngFor="let option of selectOptions" [value]="option.value">{{option.name}}</option>
</select>`
})
export class ParamDropdownComponent   {
 selectOptions = [ { value: 11, name: 'Glove Size' },
      { value: 12, name: 'Gown Size' },
      { value: 13, name: 'Speciality' },
      { value: 14, name: 'Countries' } ];
  constructor() { } 
}
