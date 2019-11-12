import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { LibraryFiltersLayout, IFilterItem, ISelectedFilter } from './models';

@Component({
    selector: 'sb-library-filters',
    templateUrl: './library-filters.component.html',
    styleUrls: ['./library-filters.component.scss']
})

export class LibraryFiltersComponent implements OnChanges {

    @Input() list: string[];
    @Input() selectedItems: number[];
    @Input() layout: LibraryFiltersLayout;
    @Output() selectedFilter: EventEmitter<ISelectedFilter> = new EventEmitter<ISelectedFilter>();

    filterList: IFilterItem[];

    get LibraryFiltersLayout() { return LibraryFiltersLayout; }

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

    selectPill(event: MouseEvent, index: number) {
        this.filterList = this.filterList.map(e => ({ ...e, selected: false }));

        try {
            this.filterList[index].selected = true;
            this.selectedFilter.emit({ event: event, data: { ...this.filterList[index], index } });

            // animation code
            let el: HTMLElement | null = document.getElementById('class' + index);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
            } else {
                setTimeout(() => {
                    el = document.getElementById('class' + index);
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
                    }
                }, 1000);
            }
        } catch (error) {
            console.log('Error in selectPill method');
        }
    }
}
