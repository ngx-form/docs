import { Component, HostListener, OnInit, ViewEncapsulation  } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    'app.component.scss',
    'app.theme.scss',
    'prism.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  shadowScroll = '';

  @HostListener('window:scroll', ['$event']) onWindowScroll($event) {
    this.shadowScroll = (window.pageYOffset > 10) ? 'shadowScroll' : '';
  }

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() { }

  demo() {
    window.location.href = 'https://github.com/ngx-form/demo';
  }

  github() {
    window.location.href = 'https://github.com/ngx-form';
  }
  donate() {
    window.location.href = 'https://donorbox.org/help-creating-open-source-software';
  }

  nav() {
    switch (this.router.url) {
      case '/guides':
      case '/':
        return false;
      default:
        return true;
    }
  }
}
