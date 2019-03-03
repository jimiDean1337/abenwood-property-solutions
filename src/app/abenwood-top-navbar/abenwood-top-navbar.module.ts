import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AbenwoodTopNavbarComponent } from './abenwood-top-navbar.component';

@NgModule({
  declarations: [AbenwoodTopNavbarComponent],
  imports: [
    SharedModule
  ],
  exports: [AbenwoodTopNavbarComponent],
  entryComponents: [AbenwoodTopNavbarComponent]
})
export class AbenwoodTopNavbarModule { }
