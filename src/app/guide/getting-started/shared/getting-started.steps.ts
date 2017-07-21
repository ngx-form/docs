export const steps = [
  {
    title: 'Install package to create dynamically preconfigured form element',
    language: 'markup',
    code: `npm install @ngx-form/element @ngx-form/interface --save`
  },
  {
    title: 'Install package with preconfigured form elements and Angular dependencies',
    language: 'markup',
    code: `npm install @angular/material @angular/cdk @ngx-form/material --save`
  },
  {
    title: 'Animations and Gesture Support',
    language: 'markup',
    code: `npm install --save @angular/animations hammerjs`
  },
  {
    title: 'Include a theme, for example in angular-cli in styles.css',
    language: 'css',
    code: `@import "~@angular/material/prebuilt-themes/indigo-pink.css";`
  },
  {
    title: 'Import necessary in your AppModule app.module.ts',
    language: 'javascript',
    code: `
// app.module.ts based on angular-cli
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormMaterialModule } from '@ngx-form/material';
import { FormElementModule } from '@ngx-form/element';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,

    FormElementModule.forRoot(),
    FormMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
      `
  },
  {
    title: 'In @Component app.component.ts',
    language: 'javascript',
    body: `
      detectChanges is added because of 'ExpressionChangedAfterItHasBeenCheckedError', you can read article about it
      <a href="https://hackernoon.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4"
        target="_blank">here</a>
    `,
    code: `
// app.component.ts
import { AfterViewInit, Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ArrayFormElementInterface } from '@ngx-form/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';
  form: FormGroup;
  simple: ArrayFormElementInterface = [
    {
      attributes: {
        autocomplete: 'off',

        // Material Design
        color: 'accent',
        floatPlaceholder: 'never',
        hideRequiredMarker: true,
        // end

        disabled: false,
        placeholder: 'Firstname',
        required: false,
        type: 'text'
      },
      destroy: {
        onCancelled: false,
        onChanged: false,
        onSubmitted: false
      },
      element: 'input',
      focus: true,
      key: 'firstname'
    }
  ];
  rows: Array<any>  = [
    {
      _id: 1,
      firstname: '',
      lastname: 'Rudnicki',
      age: 27,
      address: {
        street: 'Głuszyna',
        home: '270/5'
      },
      birthday: '2017-04-14',
      createdAt: '2019-01-01T15:01',
      month: '2017-04',
      time: '01:04',
      week: '2017-W13'
    }
  ];

  constructor(
    protected formBuilder: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef
  ) {
    this.form = this.formBuilder.group({});
  }

  created($event) {
    this.changeDetectorRef.detectChanges();
  }

  destroyed($event) {
    this.changeDetectorRef.detectChanges();
  }

  onSubmit($event) {
    console.log(this.form.get('firstname'))
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }
}
    `
  },
  {
    title: 'Component template ./example.component.html should looks like the following',
    language: 'html',
    code: `
<h1>
  {{title}}
</h1>

<!-- example.component.html -->
<form [formGroup]="form" (ngSubmit)="onSubmit()" role="form" novalidate>
  <ngx-form-element
    [form]="form"
    [model]="rows[0]"
    [config]="simple[0]"

    (created)="created($event)"
    (destroyed)="destroyed($event)"
  ></ngx-form-element>
</form>
    `
  },
  {
    title: 'Congratulations! You have successfully completed this guide.',
    language: 'markup'
  }
];

