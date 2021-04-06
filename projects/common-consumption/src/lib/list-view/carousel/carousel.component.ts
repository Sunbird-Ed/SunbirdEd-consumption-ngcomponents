import { Component, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { List } from '../models';
import { ListData } from './carousel.data';

@Component({
    selector: 'sb-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent {

    @Input() title?: string;
    @Input() subTitle?: string;
    @Input() listData: List[] = ListData;s

    @Output() itemClick: EventEmitter<any> = new EventEmitter();

    selectedIndex = -1;

    onItemSelect(event, item, index) {
        this.selectedIndex = index;
        this.itemClick.emit({event, data: item});
    }
}
