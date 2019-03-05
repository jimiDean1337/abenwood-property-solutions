import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MockProperties } from './mock.data';
import { Property } from './property';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
	list$: Observable<Property[]>;
  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
  	this.list$ = new Observable(obs => {
  		obs.next(MockProperties)
  	})
		// this.list$ = this.route.paramMap.pipe(
		// 	switchMap((params: ParamMap) =>
		// 		this.propertyService.getList(params.get('id'))
		// 		)
		// )
  }

  viewProperty(id) {
		this.router.navigateByUrl(`properties/${id}`);
  }

}
