import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { FileShareComponentComponent } from './file-share-component/file-share-component.component';
import { UploadComponentComponent } from './upload-component/upload-component.component';
const appRoutes: Routes = [
  {
    path: 'files/:id',
    component: FileShareComponentComponent,
  },
  {
    path: '',
    component: UploadComponentComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    FileShareComponentComponent,
    UploadComponentComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
