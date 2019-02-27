import { Post } from './../../Post';
import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  AngularFireList } from '@angular/fire/database';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[]=[];
  
  constructor(public dataService : DataService ) {

  }

ngOnInit() {
 this.dataService.getPosts().subscribe(posts =>{
   this.posts = posts;
   console.log(this.posts);

 });

}

}
