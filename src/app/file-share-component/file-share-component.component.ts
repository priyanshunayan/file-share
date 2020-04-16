import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-file-share-component',
  templateUrl: './file-share-component.component.html',
  styleUrls: ['./file-share-component.component.css']
})
export class FileShareComponentComponent implements OnInit {
  public downloadURL;
  public deleted = false;
  constructor(private storage: AngularFireStorage, private router: Router) { }

  ngOnInit(): void {
    const url = this.router.url;
    const filePath = url.split('/')[2];
    console.log(filePath);
    try {
      const fileRef = this.storage.ref(filePath);
      this.downloadURL = fileRef.getDownloadURL();
    } catch (e) {
      this.deleted = true;
    }
  }

}
