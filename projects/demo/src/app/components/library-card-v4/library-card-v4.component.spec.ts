import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryCardV4Component } from './library-card-v4.component';

describe('LibraryCardV4Component', () => {
  let component: LibraryCardV4Component;
  let fixture: ComponentFixture<LibraryCardV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryCardV4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryCardV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
