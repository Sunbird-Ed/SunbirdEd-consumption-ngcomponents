## LibraryCardsGrid
Can be used in the library page for all consumption platforms targeting web platform

    import { SbLibraryCardsGrid } form '@project-sunbird/common-consumption/layout/gridcards';

**Selector:** `sb-library-cards-grid`
**Exported as:** `SbLibraryCardsGrid`

### Properties

|Name| Description |
|--|--|
|@Input() title: boolean| Name that represents the section |
|@Input() type:  LibraryCardGridTypes|import the interface **LibraryCardGridTypes**, to know different possible values of card types.*`Example: infinite_card_grid`* OR *`Example: LibraryCardGridTypes.infinite_card_grid,`*|
|@Input() contentList: collection<content>| Collection of contents, where each content is a object from server API. **` Note: Add cardImg property for each item in list before passing contentList`** |
|`Optional` @Input() maxCardCount: Number| Number of cards to display the viewing area `Default value is 3`|
|`Optional` @Input() viewMoreButtonText: string| custom text to show in place of view all button, if there are more number of cards than "maxCardCount" then a button needs to be displayed. `Default value is "View All"`|
|`Optional` @Input() isLoading: boolean| Flag to handle Lazy Loading `Default value is false`|
|`Optional` @Input('hover-template') gridTemplate: TemplateRef<any>;| When card has **hover data**, the template reference of the hover component needs to be injected|

### Events

|Name| Description |
|--|--|
|@Output() viewMoreClick| Emits this event when view all button is clicked |
|@Output() cardClick| Emits this event when card is clicked |
