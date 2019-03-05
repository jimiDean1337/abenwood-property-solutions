import { NgModule } from '@angular/core';
// import { SharedModule } from '../shared/shared.module';
import { AbenwoodSubscribeComponent } from './abenwood-subscribe.component';

@NgModule({
  declarations: [AbenwoodSubscribeComponent],
  imports: [
    // SharedModule
  ],
  entryComponents: [AbenwoodSubscribeComponent],
  exports: [AbenwoodSubscribeComponent]
})
export class AbenwoodSubscribeModule { }
