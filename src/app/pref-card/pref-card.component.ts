import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-pref-card',
  templateUrl: './pref-card.component.html',
  styleUrls: ['./pref-card.component.scss']
})
export class PrefCardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    console.log('Pref Page Loaded');
  }
  ngAfterViewInit() {
    console.log('Pref ngAfterViewInit fired');
    $('.scrollspy').scrollSpy();
  }
}
