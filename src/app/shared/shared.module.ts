import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import your library
import { OwlModule } from 'ngx-owl-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [],
  imports: [
		CommonModule, OwlModule, NgbModule,
  ],
	exports: [CommonModule, OwlModule, NgbModule,]
})
export class SharedModule { }
