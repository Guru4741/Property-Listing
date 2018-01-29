import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';﻿
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FlashMessagesService } from 'angular2-flash-messages/module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  user: Observable<firebase.User>;
  items: AngularFireList<any[]>;

  
  constructor(private afAuth: AngularFireAuth, 
  			  private db: AngularFireDatabase,
  			  public flashMessage: FlashMessagesService) { 
  	this.user = afAuth.authState;
    this.items = db.list('items');
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
     this.afAuth.auth.signOut();
     this.flashMessage.show('You are logged out', 
     {cssClass: 'alert-success', timeout: 3000});
  }

  ngOnInit() {
  }

}
