import { Routes } from '@angular/router';

import { DocsComponent } from './docs/docs.component';
import { ElementComponent } from './docs/element/element.component';

import {
  DocsStartComponent,

  ElementInputComponent,
  ElementSelectComponent
} from './docs';

import { GuideComponent } from './guide/guide.component';
import { GuidesComponent } from './guides/guides.component';
import { GuidesMenuComponent } from './guides/guides-menu.component';

import { GettingStartedComponent } from './guide/getting-started/getting-started.component';

import { InterfaceComponent } from './interface/interface.component';
import { StartComponent } from './start/start.component';
import { TypeComponent } from './type/type.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'docs',
    component: DocsComponent, data: { name: 'docs' },
    children: [
      {
        path: '',
        component: DocsStartComponent,
        children: []
      }, {
        path: 'element',
        component: ElementComponent,
        children: [
          { path: 'input', component: ElementInputComponent },
          { path: 'select', component: ElementSelectComponent },
          { path: 'interface', component: InterfaceComponent },
          { path: 'type', component: TypeComponent }
        ]
      }
    ]
  },
  {
    path: 'guide',
    component: GuideComponent,
    children: [
      { path: 'getting-started', component:  GettingStartedComponent }
    ]
  },
  {
    path: 'guides',
    component: GuidesComponent,
    children: [
      { path: '', component:  GuidesMenuComponent }
    ]
  }
];

