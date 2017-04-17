import { Component } from '@angular/core';

@Component({
  selector: 'login',
  template: `

    <div id="comp-iqq5pu28inlineContent" class="s8inlineContent" data-reactid=".0.$SITE_ROOT.$desktop_siteRoot.$PAGES_CONTAINER.1.1.$SITE_PAGES.$c1dmp.1.$comp-iqq5pu28.1"><div style="left: 540px; width: 334px; position: absolute; top: 102px;" class="s9" id="comp-iqq5qjea" data-reactid=".0.$SITE_ROOT.$desktop_siteRoot.$PAGES_CONTAINER.1.1.$SITE_PAGES.$c1dmp.1.$comp-iqq5pu28.1.$comp-iqq5qjea"><h2 class="font_2" style="text-align:center; font-size:42px;"><span style="font-family:comic sans ms,comic-sans-w01-regular,comic-sans-w02-regular,comic-sans-w10-regular,cursive;"><span style="font-size:42px;">Gaming Platform</span></span></h2></div><div style="left: 540px; width: 334px; position: absolute; top: 181px;" class="s9" id="comp-j1a9aqto" data-reactid=".0.$SITE_ROOT.$desktop_siteRoot.$PAGES_CONTAINER.1.1.$SITE_PAGES.$c1dmp.1.$comp-iqq5pu28.1.$comp-j1a9aqto"><h2 class="font_2" style="font-size:25px; text-align:center;"><span class="color_23"><span style="font-size:25px;"><span style="font-style:italic;"><span style="font-family:comic sans ms,comic-sans-w01-regular,comic-sans-w02-regular,comic-sans-w10-regular,cursive;">Xiaodong Hu</span></span></span></span></h2></div></div>
    
    
    <h5 class="font_5"><span style="left: 1100px; position: absolute; font-family:comic sans ms,comic-sans-w01-regular,comic-sans-w02-regular,comic-sans-w10-regular,cursive;">Member Count: 23</span></h5>
    <h6 class="font_6" style="left: 1100px; position: absolute; top: 129px; font-family:comic sans ms,comic-sans-w01-regular,comic-sans-w02-regular,comic-sans-w10-regular,cursive;"><span>Recent Posts</span></h6>

    <hr />
    <button style="left: 540px; width: 334px; position: absolute; top: 281px;" class="btn btn-primary btn-margin" (click)="auth.login()" *ngIf="!auth.authenticated()">Log In</button>
    <button style="left: 540px; width: 334px; position: absolute; top: 381px;" class="btn btn-primary btn-margin" (click)="auth.logout()" *ngIf="auth.authenticated()">Log Out</button>
    <a style="left: 540px; width: 334px; position: absolute; top: 381px;" routerLink="/about">Browse as a visitor...</a>
    <router-outlet></router-outlet>
  `,
})

export class LoginComponent  { 
}