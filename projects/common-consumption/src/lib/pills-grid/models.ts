export enum PillShape {
    CIRCLE = 'circle',
    BOX = 'box',
    IMAGE_OVERLAP = 'image_overlap',
    DEFAULT = 'default'
}
export enum PillsViewType {
    SCROLL = 'scroll',
    NONE = 'none'
}
export enum PillBorder {
    ROUNDED = 'rounded',
    NONE = 'none'
}
export enum SelectMode {
    SINGLE = 'single',
    MULTIPLE = 'multiple'
}
export enum PillsMultiRow{
    DEFAULT = 'default',
    SINGLE = 'single',
    DOUBLE_VIEW_ROW = 'double_view_row',
    DOUBLE_VIEW_COLUMN = 'double_view_column'
}
export enum ShowMoreViewType{
    EXPAND = 'expand',
    NEW_SCREEN = 'new_screen'
}
export interface PillsColorTheme {
    iconBgColor?: string;
    pillBgColor?: string
}
