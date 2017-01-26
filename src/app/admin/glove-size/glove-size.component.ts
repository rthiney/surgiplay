import { Component, OnInit } from '@angular/core';
import { GloveSizeService, } from './glove-size.service';
import { GloveSize } from './../../models/glove-size';
@Component({
  selector: 'app-glove-size',
  templateUrl: './Glove-size.component.html',
  styleUrls: ['./Glove-size.component.scss']
})
export class GloveSizeComponent implements OnInit {

  model = new GloveSize();
  submitted = false;

  params: GloveSize[] = [];
        MetaTitle = 'Glove Sizes';
  MetaAddTitle = 'Glove Sizes';
  MetaAddPrompt = 'Enter Glove size';
  MetaPattern = '-?[0-9]*(\.[0-9]+)?';
  constructor(
    private _service: GloveSizeService) { }

  ngOnInit() {
    this._service.getAll().then(planets => this.params = planets);
  }
  onSubmit() {
    console.log('Sumbitted Form ! ', this.model.name);
    this.submitted = true;
    this._service.create(this.model.name).then(data => {
      // this._service.announceChange(1212); 
       this._service.getAll().then(planets => this.params = planets);
    });
  }
  onUpdate(elem) { 
    this._service.update(elem).then(data => {
       this._service.getAll().then(planets => this.params = planets);
    });
  }
  onDelete(elem: number) { 
    this._service.delete(elem).then(data => {
         this._service.getAll().then(planets => this.params = planets); 
    });
  }
}
