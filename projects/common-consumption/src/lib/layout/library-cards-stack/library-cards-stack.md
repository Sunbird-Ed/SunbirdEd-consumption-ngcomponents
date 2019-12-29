
## LibraryCardsStackComponent
Can be used in the library page for mobile consumption

`import { LibraryCardsStackComponent } form '@project-sunbird/common-consumption/layout/stackcards';`

**Selector:** `sb-library-cards-stack`
**Exported as:** `LibraryCardsStackComponent`

### Properties

|Name| Description |
|--|--|
|@Input() title: boolean| Name that represents the section |
|@Input() contentList: collection<content>| Collection of contents, where each content is a object from server API. **` Note: Add cardImg property for each item in list before passing contentList`** |
|`Optional` @Input() maxCardCount: Number| Number of cards to display the viewing area `Default value is 3`|
|`Optional` @Input() viewMoreButtonText: string| custom text to show in place of view all button, if there are more number of cards than "maxCardCount" then a button needs to be displayed. `Default value is "View All"`|
|`Optional` @Input() isOffline: boolean|Flag to handle offline scenarios `Default value is "False"`|

### Events
|Name| Description |
|--|--|
|@Output() viewMoreClick| Emits this event when view all button is clicked |
|@Output() cardClick| Emits this event when card is clicked |
