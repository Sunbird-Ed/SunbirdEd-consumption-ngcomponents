import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTocComponent } from './player-toc.component';

describe('PlayerTocComponent', () => {
  let component: PlayerTocComponent;
  let fixture: ComponentFixture<PlayerTocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerTocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
