import { Component, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { LibraryFiltersLayout, IFilterItem } from './models';


@Component({
    selector: 'sb-library-filters',
    templateUrl: './library-filters.component.html',
    styleUrls: ['./library-filters.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LibraryFiltersComponent implements OnChanges {

    @Input() list: string[];
    @Input() selectedItems: number[];
    @Input() layout: LibraryFiltersLayout;
    @Output() selectedFilter: EventEmitter<any> = new EventEmitter();

    filterList: IFilterItem[];

    get LibraryFiltersLayout() { return LibraryFiltersLayout; }
    constructor() { }


    ngOnChanges(changes) {
        if (this.list) {
            this.filterList = this.list.map((item, index) => {
                if (this.selectedItems && this.selectedItems.includes(index)) {
                    return ({ text: item, selected: true });
                } else {
                    return ({ text: item, selected: false });
                }
            });
        }
    }

    selectPill(event, index) {
        this.filterList = this.filterList.map(e => ({ ...e, selected: false }));
        this.filterList[index].selected = true;
        this.selectedFilter.emit({ event: event, data: { ...this.filterList[index], index } });
    }
}
