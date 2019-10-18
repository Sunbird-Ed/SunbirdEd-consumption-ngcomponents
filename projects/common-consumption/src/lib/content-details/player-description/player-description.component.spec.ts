import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDescriptionComponent } from './player-description.component';

describe('PlayerDescriptionComponent', () => {
  let component: PlayerDescriptionComponent;
  let fixture: ComponentFixture<PlayerDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
