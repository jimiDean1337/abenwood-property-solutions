import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import * as AOS from 'aos';
import * as $ from 'Jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Abenwood Property Solutions | Buy Ohio Real Estate at Wholesale Prices';
	constructor(private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {
		AOS.init({
		 	duration: 800,
		 	easing: 'slide'
 		});
	}

	navigateTo(event) {
		return this.router.navigate([event.url], { relativeTo: this.route });
	}

}
