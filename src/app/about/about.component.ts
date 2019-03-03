import { Component, OnInit } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	testimonials = [
		'assets/images/person_1.jpg',
		'assets/images/person_2.jpg',
		'assets/images/person_3.jpg',
	];

	singleOptions: OwlCarousel['options'] = {
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoplay: true,
		loop: true,
		items: 1,
		margin: 0,
		stagePadding: 0,
		nav: true,
		dots: true,
		navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	}
  constructor() { }

  ngOnInit() {
  }

}
