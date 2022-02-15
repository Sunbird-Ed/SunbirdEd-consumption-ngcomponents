import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InAppNotificationComponent } from './in-app-notification.component';

describe('InAppNotificationComponent', () => {
  let component: InAppNotificationComponent;
  let fixture: ComponentFixture<InAppNotificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InAppNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InAppNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
