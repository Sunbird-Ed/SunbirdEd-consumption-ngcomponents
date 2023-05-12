import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryCardV3Component } from './library-card-v3.component';

describe('LibraryCardV3Component', () => {
  let component: LibraryCardV3Component;
  let fixture: ComponentFixture<LibraryCardV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryCardV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryCardV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
