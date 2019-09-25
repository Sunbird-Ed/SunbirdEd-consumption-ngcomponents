import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LibraryFiltersLayout, ILibraryList } from './models';


@Component({
    selector: 'sb-library-filters',
    templateUrl: './library-filters.component.html',
    styleUrls: ['./library-filters.component.scss']
})

export class LibraryFiltersComponent implements OnInit {

    @Input() list: Array<ILibraryList>;
    @Input() layout: LibraryFiltersLayout;
    @Output() getSelectedPill: EventEmitter<any> = new EventEmitter();
    constructor() { }

    ngOnInit() {
        console.log("input", this.layout);
        console.log("list", this.list);
    }


    selectPill($event, index) {
        this.list = this.list.map(e => ({ ...e, active: false }));
        this.list[index].active = true;
        this.getSelectedPill.emit({ event, data: this.list[index] });
    }
}
