import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { IPill, PillImageSide, PillShape, PillsLayout, PillsViewType } from './models';

@Component({
    selector: 'sb-pills-grid',
    templateUrl: './pills-grid.component.html',
    styleUrls: ['./pills-grid.component.scss']
})

export class PillsGridComponent implements OnChanges {

    @Input() list: IPill[] = [
        {
            name: 'Digital Textbook',
            selected: false
        },
        {
            name: 'Course',
            selected: false
        },
        {
            name: 'TV show',
            selected: false
        },
        {
            name: 'Alllll',
            selected: false
        }
    ];
    @Input() pillslayout: PillsLayout = PillsLayout.HORIZONTAL;
    @Input() pillShape: PillShape = PillShape.RECTANGLE;
    @Input() pillImageSide: PillImageSide = PillImageSide.LEFT;
    @Input() pillsViewType: PillsViewType = PillsViewType.NONE;
    @Output() selectedPill: EventEmitter<any> = new EventEmitter<any>();
    pillsList: IPill[] = [
        {
            name: 'Digital Textbook',
            selected: false
        },
        {
            name: 'Course',
            selected: false
        },
        {
            name: 'TV show',
            selected: false
        },
        {
            name: 'Alllll',
            selected: false
        }
    ];

    get PillImageSide() { return PillImageSide; }
    get PillShape() { return PillShape; }
    get PillsLayout() { return PillsLayout; }
    get PillsViewType() { return PillsViewType; }

    ngOnChanges(changes) {
        // if (this.layout === LibraryFiltersLayout.ROUND_WITH_ICONS) {
        //     if (this.tocList) {
        //         this.filterList = this.tocList.map((item, index) => {
        //             let type = this.fetchCorrespondingTypes(item.value);
        //             if (this.selectedItems && this.selectedItems.includes(index)) {
        //                 return ({ text: item.text, selected: true, type: type });
        //             } else if (!this.selectedItems && type === TocMimeTypes.ALL) {
        //                 return ({ text: item.text, selected: true, type: type });
        //             } else {
        //                 return ({ text: item.text, selected: false, type: type });
        //             }
        //         });
        //     } else if(this.list) {
        //         this.filterList = this.list.map((item, index) => {
        //             let type = this.fetchCorrespondingTypes(item);
        //             if (this.selectedItems && this.selectedItems.includes(index)) {
        //                 return ({ text: item, selected: true, type: type });
        //             } else if (!this.selectedItems && item === TocMimeTypes.ALL) {
        //                 return ({ text: item, selected: true, type: type });
        //             } else {
        //                 return ({ text: item, selected: false, type: type });
        //             }
        //         });
        //     }
        // } else {
        //     if (this.list) {
        //         this.filterList = this.list.map((item, index) => {
        //             if (this.selectedItems && this.selectedItems.includes(index)) {
        //                 return ({ text: item, selected: true });
        //             } else {
        //                 return ({ text: item, selected: false });
        //             }
        //         });
        //     }
        // }
    }

    selectPill(event: MouseEvent, index: number) {
        this.pillsList = this.pillsList.map(e => ({ ...e, selected: false }));

        try {
            this.pillsList[index].selected = true;
            this.selectedPill.emit({ event: event, data: { ...this.pillsList[index], index } });

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
            console.error('Error in selectPill method', error);
        }
    }
}
