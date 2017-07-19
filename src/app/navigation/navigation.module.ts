import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation.component';
import { NavigationConfig, NavigationService } from './navigation.service';

@NgModule({
  declarations: [ NavigationComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ NavigationComponent ]
})
export class NavigationModule {
  static forRoot(config: NavigationConfig): ModuleWithProviders {
    return {
      ngModule: NavigationModule,
      providers: [
        NavigationService,
        {
          provide: NavigationConfig,
          useValue: config
        }
      ]
    };
  }

  static forChild() {
    return {
      ngModule: NavigationModule
    };
  }
}
