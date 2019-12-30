**TOC Item Component**

This component can be used to show table of content of the book or collection in accordion struture. Where playable content shows as cards.
It receives toc data and mimeType filter too. And emits card click event.

  

**Selector**: `sb-toc-item`

  

  

**Exported as** : `TocItemComponent`

  

  

### Properties

  
| Name     |  Description  |
|----------|:-------------:|
| @Input() tocData |  Textbook or collection object |
| @Input() activeMimeTypeFilter: Array<<string>string> |    MimeType filter - accepts following mimeTypes *`Example: ALL, DOCS, INTERACTION, VIDEO and COLLECTION`* |
| @Input() noContentMessage: string | Message to show when there is no content available. Default is in English as  *`No content available`* |
| @Input() activeContent: IContent | Content data for the selected card. 

  

### Events

| Name     |  Description  |
|----------|:-------------:|
| @Output() tocCardClick | Emits this event when user clicks on the card. `Example: event.data = Array<ICard>`