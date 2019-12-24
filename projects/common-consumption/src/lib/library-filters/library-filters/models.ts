export enum LibraryFiltersLayout {
    ROUND = 'round',
    ROUND_WITH_ICONS = 'round-with-icon',
    SQUARE = 'square'
}

export enum TocMimeTypes {
    COLLECTION= 'collection',
    VIDEO= 'video',
    AUDIO= 'audio',
    INTERACTION= 'interaction',
    DOCS= 'docs',
    ALL= 'all'
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
