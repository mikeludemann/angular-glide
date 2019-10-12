import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import Glide from '@glidejs/glide';

import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

@Component({
  selector: 'glide',
  templateUrl: './glide.component.html',
  styleUrls: ['./glide.component.css']
})
export class GlideComponent implements OnInit {

  @Input() element: string;
  @Input() options: string;

  @Input() ngStyle: { [key: string]: string; }

  @ViewChild('carousel') el: ElementRef;

  constructor() { }

  ngOnInit() {

    var glide = new Glide(this.element, this.options);
    
    glide.mount();

  }

}
