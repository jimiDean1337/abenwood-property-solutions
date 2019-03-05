import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PropertiesRoutingModule } from './properties-routing.module';

import { PropertiesComponent } from './properties.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

@NgModule({
  declarations: [PropertiesComponent, PropertyListComponent, PropertyDetailsComponent],
  imports: [
    SharedModule,
    PropertiesRoutingModule,
  ],
	entryComponents: [PropertyListComponent]
})
export class PropertiesModule { }
