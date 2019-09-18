import { Component } from '@angular/core';
import { RouterOutlet, Router, Event, NavigationStart } from '@angular/router';
import { slider, transformer, fader, stepper } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader,
    // slider,
    // transformer,
    // stepper
  ]
})
export class AppComponent {
  title = 'airport-simulation';
  footerVisibility = false;

  constructor(private router: Router) {

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.footerVisibility = false;
      } else {
        setTimeout(() => { this.footerVisibility = true }, 1000);
      }
    });

  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
