export interface IActionButton {
  label: string;
  name: ActionButtonType;
  iconPath?: string;
  disabled: boolean;
}

export interface IButtonClick {
  event: MouseEvent;
  data: IActionButton;
}

/* Supported action button Types */
export enum ActionButtonType {
  DELETE = 'delete',
  DOWNLOAD = 'download',
  FULL_SCREEN = 'fullscreen',
  PRINT = 'print',
  RATE = 'rate',
  SHARE = 'share',
  UPDATE = 'update',
}
