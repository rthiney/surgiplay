import { Component, OnInit } from '@angular/core';
import { GownSizeService, } from './gown-size.service';
import { GownSize } from './../../models/gown-size';

@Component({
  selector: 'app-gown-size',
  templateUrl: './gown-size.component.html',
  styleUrls: ['./gown-size.component.scss']
})
export class GownSizeComponent implements OnInit {

  model = new GownSize();
  submitted = false;

  planetsList: GownSize[] = [];
  MetaTitle = 'Gown Sizes';
  MetaAddTitle = 'Gown Sizes';
  MetaAddPrompt = 'Enter gown size';
  constructor(
    private _planetservice: GownSizeService) { }

  ngOnInit() {
    this._planetservice.getAll().then(planets => this.planetsList = planets); 
  }
  onSubmit() {
    console.log('Sumbitted Form ! ', this.model.name);
    this.submitted = true;
    this._planetservice.create(this.model.name).then(data => {
      // this._service.announceChange(1212); 
       this._planetservice.getAll().then(planets => this.planetsList = planets);
    });
  }
  onUpdate(elem) { 
    this._planetservice.update(elem).then(data => {
       this._planetservice.getAll().then(planets => this.planetsList = planets);
    });
  }
  onDelete(elem: number) { 
    this._planetservice.delete(elem).then(data => {
         this._planetservice.getAll().then(planets => this.planetsList = planets); 
    });
  }
}
