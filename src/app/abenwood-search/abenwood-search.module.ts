import { NgModule } from '@angular/core';
// import { SharedModule } from '../shared/shared.module';
import { AbenwoodSearchComponent } from './abenwood-search.component';

@NgModule({
  declarations: [AbenwoodSearchComponent],
  imports: [
    // SharedModule
  ],
  exports: [AbenwoodSearchComponent],
  entryComponents: [AbenwoodSearchComponent],
})
export class AbenwoodSearchModule { }
