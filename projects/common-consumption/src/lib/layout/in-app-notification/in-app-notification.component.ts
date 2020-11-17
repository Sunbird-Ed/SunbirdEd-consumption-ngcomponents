import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { notificationList } from './in-app-notification-data';

@Component({
  selector: 'sb-in-app-notification',
  templateUrl: './in-app-notification.component.html',
  styleUrls: ['./in-app-notification.component.scss']
})
export class InAppNotificationComponent implements OnInit {

  @Input() notificationList = [];
  @Input() inAppNotificationConfig = {
    title: 'Notification',
    subTitle: 'New Notification (s)',
    clearText: 'Clear',
    moreText: 'See more',
    lessText: 'See less',
    maxNotificationCount: 5
  };
  @Output() notificationClick: EventEmitter<any> = new EventEmitter();
  @Output() deleteNotificationClick: EventEmitter<any> = new EventEmitter();
  @Output() clearAllClick: EventEmitter<any> = new EventEmitter();
  displayItemCount: number;

  constructor() { }

  ngOnInit() {
    this.displayItemCount = this.inAppNotificationConfig.maxNotificationCount;
    console.log(this.notificationList);
  }

  notificationClickHandler(event) {
    console.log(this.notificationList);
    this.notificationClick.emit(event);
  }

  deleteNotificationHandler(event) {
    this.deleteNotificationClick.emit(event);
  }

  clearAllNotifications(event) {
    const eventData = {
      event,
      data: this.notificationList
    };
    this.clearAllClick.emit(eventData);
  }

  showMore() {
    if (this.notificationList.length) {
      this.displayItemCount = this.notificationList.length;
    }
  }

  showLess() {
    this.displayItemCount = this.inAppNotificationConfig.maxNotificationCount;
  }

}
