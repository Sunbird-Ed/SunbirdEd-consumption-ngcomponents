import { AfterContentInit, Component, ContentChildren, Input, Output, EventEmitter, QueryList, TemplateRef, OnInit } from '@angular/core';
import { PillBorder, PillShape, PillsViewType, SelectMode, PillsMultiRow, ShowMoreViewType, PillSize, PillTextElipsis, PillBoxShadow } from '../models';
import { PlatformType } from '../../card/models';
import { PillItemComponent } from '../pill-item/pill-item.component';

@Component({
    selector: 'sb-pills-grid',
    templateUrl: './pills-grid.component.html',
    styleUrls: ['./pills-grid.component.scss']
})

export class PillsGridComponent implements AfterContentInit, OnInit {

    @ContentChildren(PillItemComponent) pillItems: QueryList<PillItemComponent>;
    visiblePillItems: PillItemComponent[] = [];
    visiblePillTemplateRefs: TemplateRef<any>[] = [];

    @Input() pillShape: PillShape = PillShape.DEFAULT;
    @Input() pillsViewType: PillsViewType = PillsViewType.NONE;
    @Input() pillBorder: PillBorder = PillBorder.NONE;
    @Input() selectMode: SelectMode = SelectMode.SINGLE;
    @Input() pillsMultiRow: PillsMultiRow = PillsMultiRow.DEFAULT;
    @Input() minDisplayCount: number;
    @Input() viewMoreText: string;
    @Input() viewLessText: string;
    @Input() showMoreViewType: ShowMoreViewType = ShowMoreViewType.EXPAND
    @Input() pillSize: PillSize = PillSize.SMALL
    @Input() pillTextElipsis: PillTextElipsis = PillTextElipsis.NONE
    @Input() pillBoxShadow: PillBoxShadow = PillBoxShadow.DISABLE

    @Output() select = new EventEmitter<any>();
    @Output() viewMorePillList = new EventEmitter<any>();
    @Input() platform = PlatformType.MOBILE;
    @Input() title = '';
    viewCount: number;

    get PillShape() { return PillShape; }
    get PillsViewType() { return PillsViewType; }
    get PillBorder() { return PillBorder; }
    get PillsMultiRow() { return PillsMultiRow; }
    get ShowMoreViewType() { return ShowMoreViewType; }
    get PillSize() { return PillSize; }
    get PillTextElipsis() { return PillTextElipsis; }
    get PillBoxShadow() { return PillBoxShadow; }

    ngOnInit() {
        this.assignDefaultPillsConfig();
    }

    assignDefaultPillsConfig() {
        this.pillShape = this.pillShape || PillShape.DEFAULT;
        this.pillsViewType = this.pillsViewType || PillsViewType.NONE;
        this.pillBorder = this.pillBorder || PillBorder.NONE;
        this.selectMode = this.selectMode || SelectMode.SINGLE;
        this.pillsMultiRow = this.pillsMultiRow || PillsMultiRow.DEFAULT;
        this.pillSize = this.pillSize || PillSize.SMALL;
        this.pillTextElipsis = this.pillTextElipsis || PillTextElipsis.NONE;
        this.pillBoxShadow = this.pillBoxShadow || PillBoxShadow.DISABLE;

        if (this.minDisplayCount !== null && this.minDisplayCount !== undefined) {
            this.viewMoreText = this.viewMoreText || 'View More';
            this.viewLessText = this.viewLessText || 'View Less';
            this.showMoreViewType = this.showMoreViewType || ShowMoreViewType.EXPAND;
        }
    }

    ngAfterContentInit() {
        this.viewCount = (this.minDisplayCount) ? this.minDisplayCount : this.pillItems.length;

        this.visiblePillItems = this.pillItems.toArray().slice(0, this.viewCount);
        this.visiblePillTemplateRefs = this.visiblePillItems.map(p => p.template);
        const onSelect = (pill: PillItemComponent, event: MouseEvent) => {
            if (this.selectMode === SelectMode.SINGLE && pill.selected) {
                this.visiblePillItems.forEach(e => {
                    if (e !== pill) {
                        e.selected = false;
                    }
                });
                pill.selected = false;
                this.select.emit({event, data: [{ name: pill.name, value: pill.value }]});
            } else {
                this.select.emit({
                    event,
                    data: this.visiblePillItems
                        .filter(p => p.selected)
                        .map(p => ({ name: p.name, value: p.value }))
                });
            }
        };
        this.visiblePillItems.forEach(e => e.onSelect = onSelect);
    }

    viewMore() {
        this.viewCount = this.pillItems.length;
        this.visiblePillItems = this.pillItems.toArray().slice(0, this.viewCount);
        this.visiblePillTemplateRefs = this.visiblePillItems.map(p => p.template);
    }

    viewLess() {
        this.viewCount = this.minDisplayCount;
        this.visiblePillItems = this.pillItems.toArray().slice(0, this.viewCount);
        this.visiblePillTemplateRefs = this.visiblePillItems.map(p => p.template);
    }

    viewMoreInNewScreen(event) {
        this.viewMorePillList.emit({ event, data: (this.pillItems && this.pillItems.toArray()) });
    }

}
