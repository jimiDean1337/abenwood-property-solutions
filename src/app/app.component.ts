import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';
import * as $ from 'Jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Abenwood Property Solutions | Buy Ohio Real Estate at Wholesale Prices';

	ngOnInit() {
		AOS.init({
		 	duration: 800,
		 	easing: 'slide'
 		});
	}

}
