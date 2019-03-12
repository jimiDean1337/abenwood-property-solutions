import { Component, OnInit, HostListener } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterEvent,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';
import { reduce, switchMap, map, finalize, tap, timeout } from 'rxjs/operators';
import { fromEvent, of, Observable } from 'rxjs';
import * as AOS from 'aos';
import * as $ from 'Jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Abenwood Property Solutions | Buy Ohio Real Estate at Wholesale Prices';
  loading: Observable<boolean>;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loader();
    AOS.init({
      animatedClassName: 'animated',
      duration: 800,
      easing: 'slide',
    });
  }

  loader(navigate = null) {
    this.loading = new Observable(obs => {
      obs.next(true);
      if (navigate) {
        setTimeout(() => {
          this.router.navigate([navigate.url], { relativeTo: this.route });
          window.scrollTo(0, 0);
          obs.next(false);
        }, 1500);
      } else {
        setTimeout(() => {
          obs.next(false);
        }, 1500);
      }
    });
  }

  navigateTo(event: { url: string }) {
    this.loader(event);
    // this.loading = new Observable(obs => {
    //   obs.next(true);
    //   setTimeout(() => {
    //     this.scrollToTop();
    //     this.router.navigate([event.url], { relativeTo: this.route });
    //     obs.next(false);
    //   }, 1500);
    // });
  }

  scrollToTop() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }
}
