import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

import { AuthService, ConfigService } from './shared';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [AuthService, ConfigService],
  directives: [ROUTER_DIRECTIVES, MD_TOOLBAR_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://scaphold.io';

  constructor(config: ConfigService) {
    console.log(`AppComponennt instantiated with env: ${config.env}`);
  }
}
