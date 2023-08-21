import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseByCardComponent } from './browse-by-card.component';

describe('BrowseByCardComponent', () => {
  let component: BrowseByCardComponent;
  let fixture: ComponentFixture<BrowseByCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseByCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseByCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
