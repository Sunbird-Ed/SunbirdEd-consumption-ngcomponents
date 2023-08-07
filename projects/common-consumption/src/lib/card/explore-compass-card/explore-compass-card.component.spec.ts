import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCompassCardComponent } from './explore-compass-card.component';

describe('ExploreCompassCardComponent', () => {
  let component: ExploreCompassCardComponent;
  let fixture: ComponentFixture<ExploreCompassCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreCompassCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreCompassCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
