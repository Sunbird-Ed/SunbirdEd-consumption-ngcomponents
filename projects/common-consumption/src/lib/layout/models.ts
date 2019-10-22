import { IContent } from '../card/models';

export interface ICardClick {
    event: MouseEvent;
    data: IContent;
}

export interface IViewMoreClick {
    event: MouseEvent;
    data: IContent[];
}