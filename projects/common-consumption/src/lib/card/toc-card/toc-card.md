## TocCard
**Selector**: `sb-toc-card`
**Exported as** : `TocCardComponent`
### Properties

|Name| Description |
|--|--|
|@Input() content: IContent| Content Object |
|@Input() type: TocCardType|import the interface **TocCardType**, to know different possible values of card types.*`Example: TEXTBOOK, COURSE`*|
|@Input() activeContent: IContent| Content data for the selected card.|

### Events
| Name | Description |
|--|--|
| @Output() tocCardClick | Emits this event when user clicks on the card. `Example: event.data = Array<ICard>`