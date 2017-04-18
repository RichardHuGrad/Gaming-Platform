import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService{
    constructor(private http: Http){
        console.log('PostService Initialized...');
    }

    //Requesting data from mlab
    getPosts(){
        return this.http.get('https://api.mlab.com/api/1/databases/gaming-platform/collections/user-posts?apiKey=3qyLsr9-pCvIhWM6vUda65-ZHzEZQXA1')
            .map(res => res.json());
    }
}
