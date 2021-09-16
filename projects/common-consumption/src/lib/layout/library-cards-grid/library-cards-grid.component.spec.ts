import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryCardsGridComponent } from './library-cards-grid.component';
import { LibraryCardComponent } from '../../card/library-card/library-card.component';
import { CardHoverComponent } from '../../card/card-hover/card-hover.component';
import { LibraryCardV2Component } from '../../card/library-card-v2/library-card-v2.component';
import { LibraryCardV3Component } from '../../card/library-card-v3/library-card-v3.component';

describe('LibraryCardsGridComponent', () => {
  let component: LibraryCardsGridComponent;
  let fixture: ComponentFixture<LibraryCardsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LibraryCardsGridComponent,
        LibraryCardComponent,
        CardHoverComponent,
        LibraryCardV2Component,
        LibraryCardV3Component
      ]
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
