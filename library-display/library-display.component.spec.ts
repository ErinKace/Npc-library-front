import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryDisplayComponent } from './library-display.component';

describe('LibraryDisplayComponent', () => {
  let component: LibraryDisplayComponent;
  let fixture: ComponentFixture<LibraryDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
