import { Component, OnInit,  AfterViewInit, ElementRef } from '@angular/core';
//  import {TooltipModule} from 'primeng/primeng';
//  import {CalendarModule} from 'primeng/primeng';
 import { ParamDropdownComponent } from './../shared/components/parameters.component';
declare var $: any;
@Component({
  selector: 'app-surgeries', 
  templateUrl: './surgeries.component.html',
  styleUrls: ['./surgeries.component.scss']
})
export class SurgeriesComponent implements OnInit, AfterViewInit {
value: Date;
   rootNode: any;
    container: any;
      constructor(rootNode: ElementRef) {
          this.rootNode = rootNode;

     }

  ngOnInit() {
    console.log('Surgeries Page Loaded');
  }
  ngAfterViewInit() {
    console.log('Surgeries ngAfterViewInit fired');
    $('#modal2').modal();
     $('#modal1').modal();
     $('.tooltipped').tooltip();
  }
  openModal() {
     $('#modal2').modal('open');
  }
   closeModal() {
     $('#modal2').modal('close');
  }
  clickIt() {
 
 this.container = $('.sassTEST')[0];
this.container.innerHTML = 'Chan@@ged';
    //    console.log('Clickit   fired');
    //  this.container = $('.sassTEST');
    // console.log(this.container);
    // this.container.innerHTML = 'Ficker';
    //    console.log(this.container.innerHTML);
  }
}
