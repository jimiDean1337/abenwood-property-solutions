import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-abenwood-top-navbar',
  templateUrl: './abenwood-top-navbar.component.html',
  styleUrls: ['./abenwood-top-navbar.component.scss']
})
export class AbenwoodTopNavbarComponent implements OnInit {
	@Output('locationChanged') onNavigation = new EventEmitter<any>();
  isCollapsed = false;
  constructor() { }

  ngOnInit() {
  }

  navigateTo(url: string) {
  	return this.onNavigation.emit({url: url})
  }

}
