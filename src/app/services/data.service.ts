import { Post } from './../Post';
//import { PostsComponent } from './../posts/posts.component';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable()
  
export class DataService {


  Posts: AngularFireList<any>;

  private posts = this.af.list<any>('/posts') as AngularFireList<Post[]>;

  constructor(public af: AngularFireDatabase) {}

  getPosts() {
    return this.posts.snapshotChanges();
  }
}

