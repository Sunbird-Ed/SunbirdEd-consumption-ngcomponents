import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationCardComponent } from '../../card/notification-card/notification-card.component';

import { InAppNotificationComponent } from './in-app-notification.component';

describe('InAppNotificationComponent', () => {
  let component: InAppNotificationComponent;
  let fixture: ComponentFixture<InAppNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InAppNotificationComponent, NotificationCardComponent ]
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
