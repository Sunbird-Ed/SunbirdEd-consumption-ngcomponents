import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ListData } from './carousel.data';

@Component({
    selector: 'sb-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent {

    @Input() title?: string;
    @Input() subTitle?: string;
    @Input() listData = ListData;
    @ViewChild('carouselContainer', { read: ElementRef, static: false }) public gallery: ElementRef<any>;

    @Output() itemClick: EventEmitter<any> = new EventEmitter();

    selectedIndex = -1;
    galleryScroller: any;
    galleryItemSize: any;

    ngOnInit(): void {
        setTimeout(() => {
        this.galleryScroller = this.gallery.nativeElement.querySelector('.carousel-scroller');
        this.galleryItemSize = this.galleryScroller.querySelector('div').clientWidth;
        }, 0);
    }

    scrollToNextPage() {
        this.galleryScroller.scrollBy(this.galleryItemSize, 0);
    }

    scrollToPrevPage() {
        this.galleryScroller.scrollBy(-this.galleryItemSize, 0);
    }

    onItemSelect(event, item, index) {
        this.selectedIndex = index;
        this.itemClick.emit({event, data: item});
    }
}
