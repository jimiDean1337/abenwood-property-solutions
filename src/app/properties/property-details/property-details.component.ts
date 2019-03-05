import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MockProperties } from '../mock.data';
import { Property } from '../property';
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
	property$: Observable<Property>;
	detailsOptions = {
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoplay: true,
		loop: true,
		items: 1,
		margin: 0,
		stagePadding: 0,
		navigation: true,
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
	constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
		this.property$ = this.route.paramMap.pipe(
			switchMap((params: ParamMap) =>
							of(MockProperties[params.get('id')])
						)
		);
  }

}
