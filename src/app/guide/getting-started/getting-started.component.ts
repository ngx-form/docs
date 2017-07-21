import { Component, HostListener } from '@angular/core';
import { steps } from './shared/getting-started.steps';

@Component({
  selector: 'app-guide-getting-started',
  styleUrls: [ 'getting-started.component.scss' ],
  templateUrl: 'getting-started.component.html'
})
export class GettingStartedComponent {
  steps = steps;
}
