import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';﻿
import { FlashMessagesModule } from 'angular2-flash-messages/module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './Components/listings/listings.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ListingComponent } from './Components/listing/listing.component';
import { AddListingComponent } from './Components/add-listing/add-listing.component';
import { EditListingComponent } from './Components/edit-listing/edit-listing.component';
import { environment } from '../environments/environment';

import { FirebaseService } from './services/firebase.service';
import { Listings2Component } from './component/listings2/listings2.component';
import { FlashMessagesService } from 'angular2-flash-messages/module';

const appRoutes:Routes = [
    {path: '', component: HomeComponent},
    {path: 'listings', component: ListingsComponent},
    {path: 'add-listings', component: AddListingComponent},
    {path: 'listing/:id', component: ListingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,
    Listings2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlashMessagesModule
  ],
  providers: [FirebaseService, AngularFireDatabase, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
