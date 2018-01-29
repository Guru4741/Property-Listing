import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';﻿
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  listings;
  listing;
  folder: any;

  constructor(private db: AngularFireDatabase) {
  	this.folder = 'listingimages';
   }

  getListings(){
  	  
  	  this.listings = this.db.list('/listings').snapshotChanges().map(actions => {
    	return actions.map(action => ({ key: action.key, ...action.payload.val() }));
  	  })
  	  return this.listings;
  }

  getListingDetails(id){
  	this.listing = this.db.object('/listings/'+id).valueChanges();
  	return this.listing;

  }

  addListing(listing){
  	//Create Root Reference  	
  	    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        console.log(this.listings);
        return this.listings.push(listing);
        
  		});
  	}
  }

}

interface Listing{
	$key?: string;
	title?: string;
	type?: string;
	image?: string;
	city?: string;
	owner?: string;
	bedrooms?: string
}