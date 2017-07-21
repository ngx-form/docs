import {Component, Inject} from '@angular/core';

import {features as sharedFeatures} from './shared/features';

@Component({
  selector: 'app-start',
  styleUrls: ['start.component.scss'],
  templateUrl: 'start.component.html'
})
export class StartComponent {
  features: Array<Object>;
  constructor() {
    this.features = sharedFeatures;
  }
}
