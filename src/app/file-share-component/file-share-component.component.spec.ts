import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileShareComponentComponent } from './file-share-component.component';

describe('FileShareComponentComponent', () => {
  let component: FileShareComponentComponent;
  let fixture: ComponentFixture<FileShareComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileShareComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileShareComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
