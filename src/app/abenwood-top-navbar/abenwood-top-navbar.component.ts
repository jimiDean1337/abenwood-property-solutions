import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-abenwood-top-navbar',
  templateUrl: './abenwood-top-navbar.component.html',
  styleUrls: ['./abenwood-top-navbar.component.scss']
})
export class AbenwoodTopNavbarComponent implements OnInit {
	@Output('locationChanged') onNavigation = new EventEmitter<any>();
  isCollapsed: boolean;
  active = 'home';
  constructor() { }

  ngOnInit() {
    this.isCollapsed = true;
  }

  isActive(name) {
		return this.active === name ? 'active' : '';
  }

  navigateTo(url: string) {
		this.active = url;
    this.isCollapsed = true;
  	return this.onNavigation.emit({url: url})
  }

  toggleNavbarCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
