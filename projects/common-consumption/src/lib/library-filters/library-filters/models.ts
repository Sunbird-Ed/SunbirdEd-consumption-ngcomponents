export enum LibraryFiltersLayout {
    ROUND = 'round',
    ROUND_WITH_ICONS = 'round-with-icon',
    SQUARE = 'square'
}

export enum TocMimeTypes {
    COLLECTION= 'collection',
    VIDEO= 'video',
    AUDIO= 'audio',
    INTERACTIVE= 'interactive',
    DOCS= 'docs',
    ALL= 'all'
}

export interface IFilterItem {
    text: string;
    selected: boolean;
    type?: string;
}

export interface ISelectedFilter {
    event: MouseEvent;
    data: {
        index: number;
        selected: boolean;
        text: string;
        type?: string;
    };
}

