export interface IPill {
   name: string;
   image?: string;
   selected?: boolean;
}

export enum PillShape {
    CIRCLE = 'circle',
    RECTANGLE = 'rectangle'
}
export enum PillsLayout {
    HORIZONTAL = 'horizontal',
    VERTICLE = 'verticle'
}
export enum PillsViewType {
    GRID = 'grid',
    SCROLL = 'scroll',
    NONE = 'none'
}
export enum PillImageSide {
    LEFT = 'left',
    RIGHT = 'right'
}
