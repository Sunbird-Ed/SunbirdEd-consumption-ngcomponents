import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LernLandingPageComponent } from './lern-landing-page.component';

describe('LernLandingPageComponent', () => {
  let component: LernLandingPageComponent;
  let fixture: ComponentFixture<LernLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LernLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LernLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
