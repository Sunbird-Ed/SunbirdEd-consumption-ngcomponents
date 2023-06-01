import { Component, OnInit, Input, EventEmitter, Output, TemplateRef } from '@angular/core';
import { IClick } from '../../card/models';
import { staticData } from './faq.component.data';

@Component({
  selector: 'sb-faq',
  templateUrl: './faq.component.html',
  // styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  @Input() data:any = staticData;
  @Input() appName;
  @Input() extraTemplate: TemplateRef<any>;

  @Output() toggleGroupEvent: EventEmitter<IClick> = new EventEmitter();
  @Output() yesClickedEvent: EventEmitter<IClick> = new EventEmitter();
  @Output() noClickedEvent: EventEmitter<IClick> = new EventEmitter();
  @Output() submitClickedEvent: EventEmitter<IClick> = new EventEmitter();

  constants: any;
  faqs: any;
  isNoClicked : boolean;
  isYesClicked : boolean;
  isSubmitted : boolean;
  shownGroup : any;
  value: any;
  textValue: any;
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
    this.constants = this.data.constants;
    this.faqs = this.data.faqs;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.data.faqs.length; i++) {
      if (this.data.faqs[i].topic.includes('{{APP_NAME}}')) {
        this.data.faqs[i].topic = this.data.faqs[i].topic.replace('{{APP_NAME}}', this.appName);
      } else {
        this.data.faqs[i].topic = this.data.faqs[i].topic;
      }
      if (this.data.faqs[i].description.includes('{{APP_NAME}}')) {
        this.data.faqs[i].description = this.data.faqs[i].description.replace('{{APP_NAME}}', this.appName);
      } else {
        this.data.faqs[i].description = this.data.faqs[i].description;
      }
    }
  }

  toggleGroup(i,event:MouseEvent) {
    this.isNoClicked = false;
    this.isYesClicked = false;
    this.isSubmitted = false;
    let isCollapsed = true;
    this.value = {};
    this.value.action = 'toggle-clicked';
    this.value.position = i;
    this.value.value = {};
    this.value.value.topic = this.data.faqs[i].topic;
    this.value.value.description = this.data.faqs[i].description;
    if (this.isGroupShown(i)) {
      isCollapsed = false;
      this.shownGroup = null;
      this.value.isOpened = false;
    } else {
      isCollapsed = false;
      this.shownGroup = i;
      this.value.isOpened = true;
    }
    this.toggleGroupEvent.emit({event: event,data: this.value});
  }

  // to check whether the card is toggled or not
isGroupShown(group) {
   return this.shownGroup === group;
  }

noClicked(i,event:MouseEvent) {
    this.value = {};
    if (!this.isNoClicked) {
      this.isNoClicked = true;
    }
    this.value.action = 'no-clicked';
    this.value.position = i;
    this.value.value = {};
    this.value.value.topic = this.data.faqs[i].topic;
    this.value.value.description = this.data.faqs[i].description;
    window.parent.postMessage(this.value, '*');
    this.noClickedEvent.emit({event: event,data: this.value});

    this.setAccessibilityFocus('no-clicked');
  }

yesClicked(i,event:MouseEvent) {
  this.value = {};
  if (!this.isYesClicked) {
    this.isYesClicked = true;
  }

  this.value.action = 'yes-clicked';
  this.value.position = i;
  this.value.value = {};
  this.value.value.topic = this.data.faqs[i].topic;
  this.value.value.description = this.data.faqs[i].description;
  window.parent.postMessage(this.value, '*');
  this.yesClickedEvent.emit({event: event,data: this.value});

  this.setAccessibilityFocus('yes-clicked');
}

submitClicked(textValue, i,event:MouseEvent) {
  this.isSubmitted = true;
  this.value = {};
  this.value.action = 'submit-clicked';
  this.value.position = i;
  this.value.value = {};
  this.value.value.topic = this.data.faqs[i].topic;
  this.value.value.description = this.data.faqs[i].description;
  this.value.value.knowMoreText = textValue;
  window.parent.postMessage(this.value, '*');
  this.submitClickedEvent.emit({event: event,data: this.value});
  this.textValue = '';
  
  this.setAccessibilityFocus('yes-clicked');
}

  private setAccessibilityFocus(id){
    setTimeout(() => {
      const ele = document.getElementById(id);
      ele ? ele.focus() : null;
    }, 100);
  }
}
