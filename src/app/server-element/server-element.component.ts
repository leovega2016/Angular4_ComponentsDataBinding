import { Component, OnInit, Input, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {type: string, name:string, content: string};

  constructor() {
    console.log('constructor called');
   }

  ngOnChanges() {
    console.log('ngOnChanges called');
  }
  

  ngOnInit() {
    console.log('ngonInit called');
  }

}
