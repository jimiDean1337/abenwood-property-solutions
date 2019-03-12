import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-abenwood-top-navbar',
  templateUrl: './abenwood-top-navbar.component.html',
  styleUrls: ['./abenwood-top-navbar.component.scss']
})
export class AbenwoodTopNavbarComponent implements OnInit {
	@Output('locationChanged') onNavigation = new EventEmitter<any>();
  isCollapsed: BehaviorSubject<boolean>;
  active = 'home';
  constructor() {
    this.isCollapsed = new BehaviorSubject(true);
  }

  ngOnInit() {
  }

  isActive(name) {
		return this.active === name ? 'active' : '';
  }

  navigateTo(url: string) {
		this.active = url;
    this.isCollapsed.next(true);
  	return this.onNavigation.emit({url: url})
  }

  toggleNavbarCollapse() {
    let isCollapsed = this.isCollapsed.getValue();
    this.isCollapsed.next(!isCollapsed);
  }

}
