import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { notificationData } from './notification-card-data';
import { NotificationStatus } from '../models';

@Component({
  selector: 'sb-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss']
})
export class NotificationCardComponent implements OnInit {

  @Input() notification = notificationData;
  @Output() notificationClick: EventEmitter<any> = new EventEmitter();
  @Output() deleteNotificationClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.notification['isRead'] = (this.notification.status === NotificationStatus.READ);
  }

  notificationClickHandler(event) {
    const eventData = {
      event,
      data: this.notification
    };
    this.notificationClick.emit(eventData);
  }

  notificationDeleteHandler(event) {
    const eventData = {
      event,
      data: this.notification
    };
    this.deleteNotificationClick.emit(eventData);
  }

}

