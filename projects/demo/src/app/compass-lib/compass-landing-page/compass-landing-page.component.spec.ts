import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompassLandingPageComponent } from './compass-landing-page.component';

describe('CompassLandingPageComponent', () => {
  let component: CompassLandingPageComponent;
  let fixture: ComponentFixture<CompassLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompassLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompassLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
