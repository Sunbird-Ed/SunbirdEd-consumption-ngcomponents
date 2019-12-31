## Player Action Button Components
This component can be used in the content player page to show all the action buttons in all the platform(mobile, web, desktop).

**Selector**: `sb-player-actions`
**Exported as** : `PlayerActionsComponent `
### Properties

|Name| Description |
|--|--|
|@Input() actionButtons: IActionButton| Array of objects for the action button with type IActionButton |


### Events

| Name     |  Description  |
|----------|:-------------:|
| @Output() buttonClick: IButtonClick | Emits this event when user clicks on the button. `Example: event.data = Array<ICard>`
