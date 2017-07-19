import { Component, OnInit } from '@angular/core';

import { DocsClass } from './../../docs.class';

@Component({
  selector: 'app-element-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class ElementSelectComponent extends DocsClass implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }
}
