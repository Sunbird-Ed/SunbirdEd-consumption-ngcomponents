
**TOC Item Component**
**Selector**: `sb-toc-child-item`
**Exported as** : `TocChildItemComponent`
### Properties
| Name | Description |
|----------|:-------------:|
| @Input() childData | Textbook or collection object |
| @Input() activeMimeTypeFilter: Array<<string>string> | MimeType filter - accepts following mimeTypes *`Example: ALL, DOCS, INTERACTIVE, VIDEO and COLLECTION`* |
| @Input() type: TocCardType | Type of card default is `textbook` |
| @Input() activeContent: IContent | Content data for the selected card.

### Events
| Name | Description |
|----------|:-------------:|
| @Output() tocCardClick | Emits this event when user clicks on the card. `Example: event.data = Array<ICard>`