import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AUTH_PROVIDERS }      from 'angular2-jwt';
 
import { AppComponent }  from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { SignupComponent } from './components/signup.component';
import { LoginComponent } from './components/login.component';
import { MypostComponent } from './components/mypost.component';
import { MyprofileComponent } from './components/myprofile.component';
import { GameComponent } from './components/game.component';
import { VisitorComponent } from './components/visitor.component';
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, UserComponent, AboutComponent, SignupComponent, LoginComponent, MypostComponent, MyprofileComponent, GameComponent, VisitorComponent],
  providers:    [ appRoutingProviders, AUTH_PROVIDERS ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
