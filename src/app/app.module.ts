import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbenwoodTopNavbarModule } from './abenwood-top-navbar/abenwood-top-navbar.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { PropertiesModule } from './properties/properties.module';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';
import { BlogModule } from './blog/blog.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
	imports: [BrowserModule, FormsModule, AbenwoodTopNavbarModule, HomeModule, SharedModule, PropertiesModule, ContactModule, AboutModule, BlogModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
