import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-pf-header',
  templateUrl: './pf-header.component.html',
  styleUrls: ['./pf-header.component.css']
})
export class PfHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.js-scroll-trigger').on('click',
      function(): void
      {
        $('.navbar-collapse').toggle();
      }
    );
    $('.nav').on('click',
      function(): void
      {
        $('.navbar-collapse').toggle();
      }
    );
  }
}
