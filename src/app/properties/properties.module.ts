import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './properties.component';

@NgModule({
  declarations: [PropertiesComponent],
  imports: [
    SharedModule,
    PropertiesRoutingModule
  ]
})
export class PropertiesModule { }
