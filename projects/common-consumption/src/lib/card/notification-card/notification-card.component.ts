import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { notificationData } from './notification-card-data';

@Component({
  selector: 'sb-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss']
})
export class NotificationCardComponent implements OnInit {

  @Input() notification = notificationData;
  @Output() notificationClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  notificationClickHandler(event) {
    const eventData = {
      event,
      data: this.notification
    };
    this.notificationClick.emit(eventData);
  }

}
