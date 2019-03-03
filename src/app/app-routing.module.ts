import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { PropertiesComponent } from './properties/properties.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: 'contact',
		component: ContactComponent,
	},
	{
		path: 'blog',
		component: BlogComponent,
	},
	{
		path: 'properties',
		component: PropertiesComponent,
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: '**',
		component: PageNotFoundComponent,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
