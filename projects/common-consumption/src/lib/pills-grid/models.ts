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
    ROUND = 'round',
    SEMI_ROUND = 'semi_round',
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
export enum PillSize{
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    EXTRA_LARGE = 'extra_large'
}
export enum PillTextElipsis{
    NONE = 'none',
    ONE_LINE = 'one_line',
    TWO_LINE = 'two_line'
}
export enum PillBoxShadow{
    DISABLE = 'disable',
    ENABLE = 'enable'
}
export interface PillsColorTheme {
    iconBgColor?: string;
    pillBgColor?: string;
    pillTextColor?: string;
}
