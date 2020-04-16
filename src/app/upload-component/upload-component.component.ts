import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upload-component',
  templateUrl: './upload-component.component.html',
  styleUrls: ['./upload-component.component.css']
})
export class UploadComponentComponent implements OnInit {
  uploadPercent: Observable<number>;
  id: string;
  downloadURL: Observable<string>;
  constructor(private storage: AngularFireStorage, private router: Router) { }
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = String(Math.floor(100 + Math.random() * 900));
    console.log(file.name);
    const lastDot = file.name.lastIndexOf('.');
    const extension = file.name.substring(lastDot + 1);
    const saveBy = `${filePath}.${extension}`;
    this.id = saveBy;
    const fileRef = this.storage.ref(saveBy);
    const task = this.storage.upload(saveBy, file);
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = fileRef.getDownloadURL())
    )
      .subscribe((s) => {
      });

  }
  ngOnInit(): void {

  }

}
