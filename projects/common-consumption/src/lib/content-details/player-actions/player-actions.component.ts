import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IActionButton, ActionButtonType, IButtonClick } from './model';

const IMAGE_PATH = 'assets/common-consumption-v8/images/sprite.svg';
const DEFAULT_BUTTON: IActionButton = {
  name: ActionButtonType.FULL_SCREEN,
  label: 'Fullscreen',
  iconPath: `${IMAGE_PATH}#${ActionButtonType.FULL_SCREEN}`,
  disabled: false
};

@Component({
  selector: 'sb-player-actions',
  templateUrl: './player-actions.component.html',
  styleUrls: ['./player-actions.component.scss']
})
export class PlayerActionsComponent implements OnInit {

  @Input() actionButtons: IActionButton[] = [];
  @Output() buttonClick: EventEmitter<IButtonClick> = new EventEmitter();

  showFullscreen = false;
  fullscreenButton: IActionButton = DEFAULT_BUTTON;

  public get ActionButtonType() { return ActionButtonType; }

  ngOnInit() {
    if (this.actionButtons) {
      this.actionButtons.forEach((item, index, object) => {
        item.iconPath = item.iconPath ? item.iconPath : `${IMAGE_PATH}#${item.name}`;

        if (item.name === ActionButtonType.FULL_SCREEN) {
          this.showFullscreen = true;
          this.fullscreenButton = item;
          object.splice(index, 1);
        }
      });
    }
  }

  /**
   * Emits event when user clicks on the button
   * @param event Contains default mouse click event
   * @param actionButton Data for the clicked button
   */
  onButtonClick(event: MouseEvent, actionButton: IActionButton) {
    this.buttonClick.emit({ event, data: actionButton });
  }
}
