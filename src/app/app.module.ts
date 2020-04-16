import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [{ provide: BUCKET, useValue: 'gs://file-share-7946e.appspot.com' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
