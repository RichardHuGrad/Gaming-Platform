import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.component';
import {AboutComponent} from './components/about.component';
import {SignupComponent} from './components/signup.component';
import {LoginComponent} from './components/login.component';
import {MypostComponent} from './components/mypost.component';
import {MyprofileComponent} from './components/myprofile.component';
import {GameComponent} from './components/game.component';
import {VisitorComponent} from './components/visitor.component';
import {AppComponent} from './app.component';

const appRoutes: Routes = [
    {
        path: '',
        component: AboutComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'mypost',
        component: MypostComponent
    },
    {
        path: 'myprofile',
        component: MyprofileComponent
    },
    {
        path: 'game',
        component: GameComponent
    },
    {
        path: 'visitor',
        component: VisitorComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);