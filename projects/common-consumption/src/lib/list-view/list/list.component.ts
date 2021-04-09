import { Component, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { CategoryListData } from './list.data';

@Component({
    selector: 'sb-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent {

    @Input() title?: string;
    @Input() subTitle?: string;
    @Input() listData: any[] = CategoryListData;
    @Input() btnImg?;
    @Input() btnText?;

    @Output() itemClick: EventEmitter<any> = new EventEmitter();

    selectedIndex = -1;

    onItemSelect(event, item, index) {
        this.selectedIndex = index;
        this.itemClick.emit({event, data: item, index});
    }
}
