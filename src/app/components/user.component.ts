import { Component } from '@angular/core';
import { PostService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',

    //providers: [PostService]
})

export class UserComponent{

    // constructor(private postsService: PostService){
    //     this.name = 'Sam Smith';
    //     this.email = 'Richrad@123.com';
    //     this.address = {
    //         street: '12 Main st',
    //         city: 'Boston',
    //         state: 'MA'
    //     }
    //     this.hobbies = ["Music", "Movies", "Sports"];
    //     this.showHobbies = false;

    //     this.postsService.getPosts().subscribe(posts => {
    //         this.posts = posts;
    //     })
    // }
}