import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryCardsGridComponent } from './library-cards-grid.component';

describe('LibraryCardsGridComponent', () => {
  let component: LibraryCardsGridComponent;
  let fixture: ComponentFixture<LibraryCardsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryCardsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryCardsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
