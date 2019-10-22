export enum LibraryFiltersLayout {
    ROUND = 'round',
    SQUARE = 'square'
}

export interface IFilterItem {
    text: string;
    selected: boolean;
}

export interface ISelectedFilter {
    event: MouseEvent;
    data: {
        index: number;
        selected: boolean;
        text: string;
    };
}