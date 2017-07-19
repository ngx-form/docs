import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule, OverlayContainer } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'hammerjs';

// internal
import { FormElementModule } from '@ngx-form/element';
import { FormMaterialModule } from '@ngx-form/material';

import PrismModule from '@ngx-prism/core';

import {
  DocsMaterialModule,
  DocsMaterialApiComponent,
  DocsMaterialExampleComponent
} from '@ngx-docs/material';

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';

// SubComponents
import {
  DocsStartComponent,
  DocsComponent,

  ElementComponent,
  ElementInputComponent,
  ElementSelectComponent
} from './docs';


import { FooterComponent } from './footer/footer.component';

import { GettingStartedComponent } from './guide/getting-started/getting-started.component';

import { GuideComponent } from './guide/guide.component';
import { GuidesComponent } from './guides/guides.component';
import { GuidesMenuComponent } from './guides/guides-menu.component';

import { InterfaceComponent } from './interface/interface.component';
import { StartComponent } from './start/start.component';
import { TypeComponent } from './type/type.component';

// Navigation
import { NavigationModule } from './navigation';
import { docsNavigation } from './navigation-config/navigation.docs';

const configNavigation = {
  navigations: [
    {
      name: 'docs',
      selected: null,
      group: docsNavigation
    }
  ]
};

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent,

    // DocsApiComponent,
    // DocsExampleComponent,

    GettingStartedComponent,

    GuideComponent,
    GuidesComponent,
    GuidesMenuComponent,

    DocsStartComponent,

    ElementComponent,
    ElementInputComponent,
    ElementSelectComponent,

    FooterComponent,

    InterfaceComponent,
    StartComponent,
    // NavigationComponent,
    TypeComponent
  ],
  exports: [
    MaterialModule,
    RouterModule
  ],
  imports: [
    // @angular
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),

    // @ngx
    DocsMaterialModule,
    FormElementModule.forRoot(),
    FormMaterialModule,
    NavigationModule.forRoot(configNavigation),
    PrismModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.themeClass = 'ngx-form';
  }
}
