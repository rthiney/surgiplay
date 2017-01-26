import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  template: `  <div class="col s12 m7">
    <h2 class="header">About</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img src="http://lorempixel.com/100/190/business/6">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>SurgiPal was formed in 2013</p>
        </div>
        <div class="card-action">
          <a href="/hpme">Home</a>
        </div>
      </div>
    </div>
  </div>
  `
})
export class AboutComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.route.params
      .map(params => params['id'])
      .subscribe(id => {
        this.id = id;
      });
  }
}
