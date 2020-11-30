import { AfterContentInit, Component, ContentChildren, Input, Output, EventEmitter, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { IPill, PillImageSide, PillShape, PillsLayout, PillsViewType, SelectMode } from '../models';
import { PillItemComponent } from '../pill-item/pill-item.component';

@Component({
    selector: 'sb-pills-grid',
    templateUrl: './pills-grid.component.html',
    styleUrls: ['./pills-grid.component.scss']
})

export class PillsGridComponent implements AfterContentInit {

    @ContentChildren(PillItemComponent) pillItems: QueryList<PillItemComponent>;
    visiblePillItems: PillItemComponent[] = [];
    visiblePillTemplateRefs: TemplateRef<any>[] = [];

    @Input() pillsLayout: PillsLayout = PillsLayout.HORIZONTAL;
    @Input() pillShape: PillShape = PillShape.BOX;
    @Input() pillImageSide: PillImageSide = PillImageSide.LEFT;
    @Input() pillsViewType: PillsViewType = PillsViewType.NONE;
    @Input() selectMode: SelectMode = SelectMode.SINGLE;
    @Input() viewCount = 5;
    @Output() select = new EventEmitter<any[]>();

    get PillImageSide() { return PillImageSide; }
    get PillShape() { return PillShape; }
    get PillsLayout() { return PillsLayout; }
    get PillsViewType() { return PillsViewType; }
    get SelectMode() { return SelectMode; }

    private minimumCount;

    ngAfterContentInit() {
        this.minimumCount = this.viewCount;
        this.visiblePillItems = this.pillItems.toArray().slice(0, this.viewCount);
        this.visiblePillTemplateRefs = this.visiblePillItems.map(p => p.template);

        const onSelect = (pill: PillItemComponent) => {
            if (this.selectMode === SelectMode.SINGLE && pill.selected) {
                this.visiblePillItems.forEach(e => {
                    if (e !== pill) {
                        e.selected = false;
                    }
                });
                this.select.emit([{ name: pill.name, value: pill.value }]);
            } else {
                this.select.emit(this.visiblePillItems
                    .filter(p => p.selected)
                    .map(p => ({ name: p.name, value: p.value })));
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
        this.viewCount = this.minimumCount;
        this.visiblePillItems = this.pillItems.toArray().slice(0, this.viewCount);
        this.visiblePillTemplateRefs = this.visiblePillItems.map(p => p.template);
    }

}
