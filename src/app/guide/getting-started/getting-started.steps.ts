export const steps = [
  {
    title: 'Step 1. Install package to create dynamically preconfigured form element',
    language: 'markup',
    body: `npm install @ngx-form/element --save`
  },
  {
    title: 'Step 2. Install package with preconfigured form elements and Angular Material',
    language: 'markup',
    body: `npm install @angular/material @ngx-form/material --save`
  },
  {
    title: 'Step 3. Import necessary in your AppModule',
    language: 'javascript',
    body: `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormElementModule } from '@ngx-form/element';
import {
  FormMaterialModule,
  FormMaterialInputComponent,
  FormMaterialSelectComponent
} from '@ngx-form/material';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,

    // Configure elements
    FormElementModule.forRoot({
      elements: [
        { name: 'input', component: FormMaterialInputComponent },
        { name: 'select', component: FormMaterialSelectComponent }
      ]
    }),

    // Include
    FormMaterialModule
  ],
  exports: [ ],
  providers: [],
  bootstrap: []
})
export class AppModule {}

      `
  },
  {
    title: 'Step 4. In `typescript` data file add',
    language: 'javascript',
    body: `
export const password = {
  'password': 'test'
};

export const inputPassword = {
  destroy: {
    onChanged: false,
    onSubmitted: false,
    onCancelled: false
  },
  disabled: false,
  element: 'input',
  key: 'password',
  model: password,
  placeholder: 'Password',
  required: true,
  type: 'password'
};
    `
  },
  {
    title: 'Step 5. Component template should looks like below',
    language: 'html',
    body: `
<form-element
  [data]="inputPassword"
  (cancelled)="cancelled($event)"
  (changed)="changed($event)"
  (submitted)="submitted($event)">
</form-element>
    `
  }

];


/*
@NgModule({
  declarations: [

    ElementComponent,
    ElementInputComponent,
    ElementSelectComponent,

    InterfaceComponent,
    StartComponent,
    NavComponent,
    TypeComponent
  ],
  exports: [
    MaterialModule,
    PrismModule
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DocsMaterialModule,
    FlexLayoutModule,
    FormElementModule.forRoot({
      elements: [
        { name: 'input', component: FormMaterialInputComponent },
        { name: 'select', component: FormMaterialSelectComponent }
      ]
    }),
    FormMaterialModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    PrismModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.themeClass = 'ngx-form';
  }
}
*/
