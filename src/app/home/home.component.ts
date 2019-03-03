import { Component, OnInit, ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	@ViewChild('heroOwl') heroOwl: OwlCarousel;
	@ViewChild('propertiesOwl') propertiesOwl: OwlCarousel;
	heroOptions: OwlCarousel['options'] = {
		loop: true,
		autoplay: true,
		margin: 0,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		items: 1,
		navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
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
	};

	propertyOptions: OwlCarousel['options'] = {
		autoplay: true,
		loop: true,
		items: 1,
		margin: 30,
		stagePadding: 0,
		nav: true,
		dots: true,
		navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	};
  constructor() { }
  heroImages = [
		'assets/images/bg_1.jpg',
		'assets/images/bg_2.jpg',
  ];
	propertyImages = [
		'assets/images/properties-1.jpg',
		'assets/images/properties-2.jpg',
		'assets/images/properties-3.jpg',
		'assets/images/properties-4.jpg',
		'assets/images/properties-5.jpg',
		'assets/images/properties-6.jpg',
		'assets/images/properties-7.jpg',
		'assets/images/properties-8.jpg',
	];
  ngOnInit() {
		this.propertyImages.map((prop, i) => this.staggerItem(i));
  }

  staggerItem(index: number) {
		const num = index * 50;
		const props = document.body.querySelectorAll('.properties');
		return props[index].setAttribute('data-aos-delay', `${num}`);

  }

}
