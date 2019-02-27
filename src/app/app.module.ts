import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {MaterialModule} from '@angular/material';
//import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { SidebarComponent } from './componenets/sidebar/sidebar.component';
import { MaincontentComponent } from './componenets/maincontent/maincontent.component';
import { RightsideComponent } from './componenets/rightside/rightside.component';
import { CreatePostComponent } from './componenets/create-post/create-post.component';
import { NewsfeedComponent } from './componenets/newsfeed/newsfeed.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/auth';

import {DataService} from './services/data.service';

import { RouterModule, Routes } from '@angular/router';
import {PostsComponent  } from './componenets/posts/posts.component';



export const firebaseConfig = {
    apiKey: "AIzaSyD1JjMz6qeB82EX2rki4MfrTmI88PhgXVI",
    authDomain: "facebookfeed-f49e9.firebaseapp.com",
    databaseURL: "https://facebookfeed-f49e9.firebaseio.com",
    storageBucket: "facebookfeed-f49e9.appspot.com",
    messagingSenderId: "851915416286"
  
};



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MaincontentComponent,
    RightsideComponent,
    CreatePostComponent,
    NewsfeedComponent,
    PostsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [
     DataService,
     AngularFireDatabase,
    AngularFireAuth,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
