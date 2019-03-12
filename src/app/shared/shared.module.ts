import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import your library
import { OwlModule } from 'ngx-owl-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AbenwoodSearchModule } from '../abenwood-search/abenwood-search.module';
import { AbenwoodSubscribeModule } from '../abenwood-subscribe/abenwood-subscribe.module';
import { AbenwoodPagerModule } from '../abenwood-pager/abenwood-pager.module';
@NgModule({
  declarations: [],
  imports: [
		CommonModule, OwlModule, NgbModule, AbenwoodSearchModule, AbenwoodSubscribeModule, AbenwoodPagerModule,
  ],
	exports: [CommonModule, OwlModule, NgbModule, AbenwoodSearchModule, AbenwoodSubscribeModule, AbenwoodPagerModule]
})
export class SharedModule { }
