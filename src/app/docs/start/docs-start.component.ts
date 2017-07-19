import { Component, OnInit } from '@angular/core';

import { NavigationService } from './../../navigation/navigation.service';

@Component({
  selector: 'app-docs-start',
  styleUrls: [ 'docs-start.component.scss' ],
  templateUrl: 'docs-start.component.html'
})
export class DocsStartComponent implements OnInit {

  elementNavigation = [];
  NavigationService: NavigationService;

  constructor(NavigationService: NavigationService) {
    this.NavigationService = NavigationService;
  }

  ngOnInit() {
    if (this.NavigationService.navigation['docs'].group.length > 0) {
      this.NavigationService.navigation['docs'].group.forEach(group => {
        group.items.forEach(items => {
          this.elementNavigation.push(items);
        });
      });
    }
    console.log(this.elementNavigation);
  }
}
