import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { notificationList } from './in-app-notification-data';

@Component({
  selector: 'sb-in-app-notification',
  templateUrl: './in-app-notification.component.html',
  styleUrls: ['./in-app-notification.component.scss']
})
export class InAppNotificationComponent implements OnInit {

  @Input() notificationList = notificationList;
  @Input() inAppNotificationConfig = {
    title: 'Notification',
    subTitle: '2 New Notification (s)',
    clearText: 'Clear',
    moreText: 'See more'
  };
  @Output() notificationClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  notificationClickHandler(event) {
    this.notificationClick.emit(event);
  }

  clearAllNotifications() {

  }

  showMore() {

  }

}
