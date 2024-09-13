import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharaSmallComponent } from './chara-small.component';

describe('CharaSmallComponent', () => {
  let component: CharaSmallComponent;
  let fixture: ComponentFixture<CharaSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharaSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharaSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
