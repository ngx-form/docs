import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { NavigationService } from './navigation.service';

@Component({
  selector: 'ngx-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: [ 'navigation.component.scss' ]
})
export class NavigationComponent implements OnInit {

  NavigationService: NavigationService;
  navigation: Object;
  @Input() name: string;

  constructor(NavigationService: NavigationService, private router: Router) {
    this.NavigationService = NavigationService;
  }

  ngOnInit() {
    if (this.name) {
      this.navigation = this.NavigationService.navigation[this.name];

      this.router.events.subscribe(
        (value) => {
          if (value instanceof NavigationEnd) {
            this.NavigationService.selectByUrl(this.name, value.url);
          }
        }
      );
    }
  }
}
