import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbenwoodSearchModule } from '../abenwood-search/abenwood-search.module';
import { AbenwoodSubscribeModule } from '../abenwood-subscribe/abenwood-subscribe.module';
// Import your library
import { OwlModule } from 'ngx-owl-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [],
  imports: [
		CommonModule, AbenwoodSearchModule, AbenwoodSubscribeModule, OwlModule, NgbModule,
  ],
	exports: [CommonModule, AbenwoodSearchModule, AbenwoodSubscribeModule, OwlModule, NgbModule,]
})
export class SharedModule { }
