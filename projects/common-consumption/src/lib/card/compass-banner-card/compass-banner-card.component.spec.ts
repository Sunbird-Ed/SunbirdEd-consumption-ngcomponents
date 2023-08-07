import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompassBannerCardComponent } from './compass-banner-card.component';

describe('CompassBannerCardComponent', () => {
  let component: CompassBannerCardComponent;
  let fixture: ComponentFixture<CompassBannerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompassBannerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompassBannerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
