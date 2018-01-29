import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages/module';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth,
  			  public flashMessage: FlashMessagesService) { }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  ngOnInit() {
  }

}
