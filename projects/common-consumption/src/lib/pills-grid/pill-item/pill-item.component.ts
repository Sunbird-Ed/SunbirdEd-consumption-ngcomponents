import { Component, Input, Output, EventEmitter, OnChanges, OnInit, HostListener, ViewChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'sb-pill-item',
    templateUrl: './pill-item.component.html',
    styleUrls: ['./pill-item.component.scss']
})

export class PillItemComponent {

    @ViewChild(TemplateRef) template: TemplateRef<any>;

    @Input() name: string;
    @Input() icon: string;
    @Input() value?: any;

    onSelect?: (pill: PillItemComponent) => void;
    selected: boolean;

    @HostListener('click') onClick() {
        this.selected = !this.selected;
        if (this.onSelect) {
            this.onSelect(this);
        }
    }
}
