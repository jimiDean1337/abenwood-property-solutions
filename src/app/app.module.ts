import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbenwoodTopNavbarModule } from './abenwood-top-navbar/abenwood-top-navbar.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { PropertiesModule } from './properties/properties.module';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
	imports: [BrowserModule, AppRoutingModule, AbenwoodTopNavbarModule, HomeModule, SharedModule, PropertiesModule, ContactModule, AboutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
