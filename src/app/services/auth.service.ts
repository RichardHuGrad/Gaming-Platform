import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

// Avoid name not found warnings
declare var Auth0Lock: any;

var UserName = String;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('th7Zry-VXwyK5AZMdVCRNuqfLHZRodhP', 'huxiaodong.auth0.com', {});

  constructor(private router: Router) {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      alert("Login Successfully");
      
      UserName = authResult.idTokenPayload.sub
      console.log(authResult.idTokenPayload.sub);
      this.router.navigate(['/user']);


      
    });

    if(localStorage.getItem("id_token") != null){
        this.router.navigate(['/user']);
    }
  }

  

  public login() {
    // Call the show method to display the widget.
    this.lock.show((error: string, profile: Object, id_token: string) => {
      if (error) {
        console.log(error);
      }

      // We get a profile object for the user from Auth0
      localStorage.setItem('profile', JSON.stringify(profile));
      // We also get the user's JWT
      localStorage.setItem('id_token', id_token);
    });
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    alert("Logout Successfully");
    this.router.navigate(['/about']);
  }
}