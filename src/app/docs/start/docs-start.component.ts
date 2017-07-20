import { Component, OnInit } from '@angular/core';

import { NavigationService } from '@ngx-ui/navigation';

@Component({
  selector: 'app-docs-start',
  styleUrls: [ 'docs-start.component.scss' ],
  templateUrl: 'docs-start.component.html'
})
export class DocsStartComponent implements OnInit {

  elementNavigation = [];

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
    if (this.navigationService.navigation['docs'].group.length > 0) {
      this.navigationService.navigation['docs'].group.forEach(group => {
        group.items.forEach(items => {
          this.elementNavigation.push(items);
        });
      });
    }
    console.log(this.elementNavigation);
  }
}
