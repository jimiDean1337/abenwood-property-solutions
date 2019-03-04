import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, RouterLink, RouterLinkActive, Scroll } from '@angular/router';
import { reduce, map, finalize, tap, timeout } from 'rxjs/operators';
import { fromEvent, Observable } from 'rxjs';
import * as AOS from 'aos';
import * as $ from 'Jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Abenwood Property Solutions | Buy Ohio Real Estate at Wholesale Prices';
	loading: Observable<boolean>;
	constructor(private router: Router, private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.loading = new Observable(observer => {
				observer.next(true);
			setTimeout(() => {
				observer.next(false);
			}, 1500);
		})
		AOS.init({
			animatedClassName: 'animated',
		 	duration: 800,
		 	easing: 'slide'
 		});
	}

	navigateTo(event) {
		this.loading = new Observable(observer => {
			observer.next(true);
			setTimeout(() => {
				this.router.navigate([event.url], { relativeTo: this.route });
				observer.next(false);
			}, 1500);
		})
	}

	scrollToTop() {
		document.body.scrollTop = 0;

	}

}
