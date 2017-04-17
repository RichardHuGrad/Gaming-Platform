import { Component, OnInit } from '@angular/core';

import { Auth } from './services/auth.service';

@Component({
  selector: 'my-app',
  providers: [ Auth ],
  //template: '<router-outlet></router-outlet>',
  
  template: `

    <div id="comp-iqq5pu28inlineContent" class="s8inlineContent" data-reactid=".0.$SITE_ROOT.$desktop_siteRoot.$PAGES_CONTAINER.1.1.$SITE_PAGES.$c1dmp.1.$comp-iqq5pu28.1">
      <div style="left: 540px; width: 334px; position: absolute; top: 0px;" class="s9" id="comp-iqq5qjea" data-reactid=".0.$SITE_ROOT.$desktop_siteRoot.$PAGES_CONTAINER.1.1.$SITE_PAGES.$c1dmp.1.$comp-iqq5pu28.1.$comp-iqq5qjea">
        <h2 class="font_2" style="text-align:center; font-size:32px;">
          <span style="font-family:comic sans ms,comic-sans-w01-regular,comic-sans-w02-regular,comic-sans-w10-regular,cursive;">
          <span style="font-size:32px;" routerLink="/">Gaming Platform</span>
          </span>
        </h2>
      </div>
    </div>
    
    <h4 class="font_8"><span style="left: 1100px; position: absolute; top: 59px; font-family:comic sans ms,comic-sans-w01-regular,comic-sans-w02-regular,comic-sans-w10-regular,cursive;">Member Count: 13</span></h4>
    <h5 class="font_8"><span style="left: 1100px; position: absolute; top: 79px; font-family:comic sans ms,comic-sans-w01-regular,comic-sans-w02-regular,comic-sans-w10-regular,cursive;">Welcome: {{UserName}}</span></h5>

    <button style="left: 1100px; width: 84px; position: absolute; top: 10px;" class="btn btn-primary btn-margin" (click)="auth.login()" *ngIf="!auth.authenticated()">Log In</button>
    <button style="left: 1200px; width: 84px; position: absolute; top: 10px;" class="btn btn-primary btn-margin" (click)="auth.logout()" *ngIf="!auth.authenticated()">Log Out</button>
    <a style="left: 640px; width: 334px; position: absolute; top: 81px;" routerLink="/visitor">Browse as a visitor...</a>
    <router-outlet></router-outlet>
  `,
})

export class AppComponent  { 

    UserName: String;

    constructor(private auth: Auth) {
      
    }


    login() {
      this.auth.login();
    }
    logout() {
      this.auth.logout();
    }
}
