import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryCardComponent } from './library-card.component';

describe('LibraryCardComponent', () => {
  let component: LibraryCardComponent;
  let fixture: ComponentFixture<LibraryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
