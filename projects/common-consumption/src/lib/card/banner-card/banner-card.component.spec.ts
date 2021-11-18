import {BannerCardComponent} from './banner-card.component';

describe('BannerCardComponent', () => {
    let bannerCardComponent: BannerCardComponent;

    beforeAll(() => {
        bannerCardComponent = new BannerCardComponent();
    });

    it('should create a instance of BannerCardComponent', () => {
        expect(bannerCardComponent).toBeTruthy();
    });

    it('should return selected banner details', () => {
        const event: MouseEvent = {} as any;
        spyOn(bannerCardComponent.cardClick, 'emit').and.callThrough();
        bannerCardComponent.onClick(event, {});
        expect(bannerCardComponent.cardClick.emit).toHaveBeenCalled();
    });
});
