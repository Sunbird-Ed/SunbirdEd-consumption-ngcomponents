## LibraryCard
Can be used in the library page for all consumption platforms.

    import { LibraryCardComponent } from '@project-sunbird/common-consumption/card/LibraryCardComponent'

**Selector**: `sb-library-card`
**Exported as** : `LibraryCardComponent `
### Properties

|Name| Description |
|--|--|
|@Input() content: IContent| Content Object |
|@Input() type:  LibraryCardTypes|import the interface **LibraryCardTypes**, to know different possible values of card types.*`Example: recently_viewed, mobile_textbook, desktop_textbook, qrcode_result`* OR *`Example: LibraryCardTypes.RECENTLY_VIEWED, LibraryCardTypes.MOBILE_TEXTBOOK, LibraryCardTypes.DESKTOP_TEXTBOOK, LibraryCardTypes.QRCODE_RESULT`*|
|@Input() cardImg: string|Image to be displayed in card in all possible scenarios. *`Note: Logic behind the image is not part of library in case of online,offline, and save resource`*|
|@Input() moreInfoLabel:string|Label to be displayed in the meta data. *`Example: Medium, Section`* |
|`Optional` @Input() isMobile: boolean| Flag to distinguish mobile platform |
|`Optional` @Input() isOffline: boolean| Flag to handle offline scenarios|
|`Optional` @Input() isLoading: boolean| Flag to handle Lazy Loading `Default value is false`|
|`Optional` @Input() section: string| In case of QR code results cards, there is a need to show section|
|`Optional` @Input('hover-template') gridTemplate: TemplateRef<any>;| When card has **hover data**, the template reference of the hover component needs to be injected|
