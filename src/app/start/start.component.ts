import {Component} from '@angular/core';

@Component({
  selector: 'app-start',
  styleUrls: ['start.component.scss'],
  templateUrl: 'start.component.html'
})
export class StartComponent {
  features = [
    {
      title: 'Angular Material',
      description: `Default preconfigured Angular Material 2 form elements.`
    },
    {
      title: 'Autocomplete',
      description: `The autocomplete is a normal text input enhanced by a panel of suggested options. `
    },
    {
      title: 'Checkbox',
      description: `Provides the same functionality as a native <input type="checkbox">`
    },
    {
      title: 'Input',
      description: `Is a wrapper for native input and textarea elements.`
    },
    {
      title: 'Datepicker',
      description: `The datepicker allows users to enter a date either through text input, or by choosing a date from the calendar.`
    },
    {
      title: 'Select',
      description: `Is a form control for selecting a value from a set of options, similar to the native <select> element.`
    },
    {
      title: 'Slider',
      description: `allows for the selection of a value from a range via mouse, touch, or keyboard, similar to <input type="range">.`
    }
  ];
}
