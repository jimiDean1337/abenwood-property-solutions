import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

@NgModule({
  declarations: [BlogComponent, BlogListComponent, BlogDetailsComponent],
  imports: [
    SharedModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
