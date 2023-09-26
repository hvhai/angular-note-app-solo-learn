import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDetailComponent } from './note-detail.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NoteDetailComponent', () => {
  let component: NoteDetailComponent;
  let fixture: ComponentFixture<NoteDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoteDetailComponent, RouterTestingModule],
    });
    fixture = TestBed.createComponent(NoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
