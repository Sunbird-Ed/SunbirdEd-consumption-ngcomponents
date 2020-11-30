export interface IPill {
    name: string;
    icon?: string;
    selected?: boolean;
    data?: any;
}

export enum PillShape {
    CIRCLE = 'circle',
    BOX = 'box',
    RECTANGLE = 'rectangle'
}
export enum PillsLayout {
    HORIZONTAL = 'horizontal',
    VERTICLE = 'verticle',
    NONE = 'none'
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
export enum PillBorder {
    ROUNDED = 'rounded',
    NONE = 'none'
}

export enum SelectMode {
    SINGLE = 'single',
    MULTIPLE = 'multiple'
}
