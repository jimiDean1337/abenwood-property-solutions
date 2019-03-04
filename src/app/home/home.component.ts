import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {OwlCarousel} from 'ngx-owl-carousel';

export class Hero {
	url: string;
	data: any;
	showDetails:'fadeInDown' | 'fadeOutUp';
	constructor(public u: string, public d, public show:'fadeInDown'|'fadeOutUp' = 'fadeOutUp') {
		this.url = u;
		this.showDetails = show;
		this.data = d;
	}

	toggleDetails() {
		this.showDetails = (this.showDetails === 'fadeOutUp') ? 'fadeInDown' : 'fadeOutUp';
		// setTimeout(() => {
		// 	this.showDetails = 'fadeOutUp';
		// }, 5000);
	}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	@ViewChild('heroOwl') heroOwl: OwlCarousel;
	@ViewChild('propertiesOwl') propertiesOwl: OwlCarousel;
	// Hero slider options
	heroOptions: OwlCarousel['options'];
	// Properties slider options
	propertyOptions: OwlCarousel['options'];
	// Hero image list
	heroImages: Hero[];
	// Property image list
	propertyImages: any[];

  constructor() { }

  ngOnInit() {
		this.heroImages = [
		{
			url:'assets/images/bg_1.jpg',
			data: {
				address: {
					street: '123 Main Street',
					location: 'Alexandria, Ohio, 43001'
				},
				caption: `A small river named Duden flows by their place and supplies it with the necessary
                regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                into your mouth.`,
        price: `$28,000`,
			}
		},
		{
			url:'assets/images/bg_2.jpg',
			data: {
				address: {
					street: '567 Lane Avenue',
					location: 'Columbus, Ohio, 43216'
				},
				caption: `Dolor ut laboris elit exercitation dolor reprehenderit id consectetur nisi et consequat in enim consectetur minim irure esse ullamco sunt esse fugiat velit ut est dolor deserunt ut non do sed consequat deserunt nulla esse et occaecat.`,
        price: `$48,000`,
			}
		}
		].map(({url, data}) => new Hero(url, data));

		this.heroOptions = {
			autoplay: true,
			loop: true,
			margin: 0,
			animateOut: 'fadeOutLeft',
			animateIn: 'fadeInDown',
			navigation: true,
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

		this.propertyImages = [
			'assets/images/properties-1.jpg',
			'assets/images/properties-2.jpg',
			'assets/images/properties-3.jpg',
			'assets/images/properties-4.jpg',
			'assets/images/properties-5.jpg',
			'assets/images/properties-6.jpg',
			'assets/images/properties-7.jpg',
			'assets/images/properties-8.jpg',
		];

		this.propertyOptions = {
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

		// this.propertyImages.map((prop, i) => this.staggerItem(i));
		console.log(this.heroImages);
  }

  staggerItem(index: number) {
		const num = index * 50;
		const props = document.body.querySelectorAll('.item .properties');
		return props[index].setAttribute('style.animationDuration', `${num}`);

  }

}
