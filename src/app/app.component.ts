import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';
import * as $ from 'Jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	@HostListener('document:loading') onLoad(event) { console.log(event); };
	title = 'Abenwood Property Solutions | Buy Ohio Real Estate at Wholesale Prices';

	ngOnInit() {
		AOS.init({
		 	duration: 800,
		 	easing: 'slide'
 		});
		console.log('aos', AOS);
	}

	scrollingUp(triggerPos: number, pos = null) {
		console.log('scrollingUp()', triggerPos, pos)
	}
}
