import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DocsComponent } from './docs/docs.component';
import { ElementComponent } from './docs/element/element.component';
import { StartComponent } from './start/start.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { rootRouterConfig } from './app.routes';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(rootRouterConfig, { useHash: false })
      ],
      declarations: [
        AppComponent,
        DocsComponent,
        ElementComponent,
        StartComponent
      ]
    });
  });
  it ('should work', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
