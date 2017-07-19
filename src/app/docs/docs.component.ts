import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { NavigationService } from './../navigation/navigation.service';

@Component({
  selector: 'app-docs',
  styleUrls: ['docs.component.scss'],
  templateUrl: 'docs.component.html'
})
export class DocsComponent implements OnInit {
  element: string;

  constructor(navigation: NavigationService) {
    navigation.selectedObservable('docs').subscribe((nav) => {
      this.element = nav.itemName;
    });
  }

  ngOnInit() {
    this.element = null;
  }
}
