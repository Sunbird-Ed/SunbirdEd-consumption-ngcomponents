## MyCourseCardComponent
Can be used in the library page for all consumption platforms.

    import { MyCourseCardComponent } from '@project-sunbird/common-consumption/card/MyCourseCardComponent'

**Selector**: `sb-my-course-card`
**Exported as** : `MyCourseCardComponent `
### Properties

|Name| Description |
|--|--|
|@Input() content: Object |recieved from my courses api response|
|@Input() cardImg: string|Image to be displayed in card in all possible scenarios. *`Note: Logic behind the image is not part of library in case of online,offline, and save resource`*|
|@Input() moreInfoLabel:string|Label to be displayed in the meta data. *`Example: Medium, Section`* |
|`Optional` @Input() isMobile: boolean| Flag to distinguish mobile platform |
|`Optional` @Input() isOffline: boolean| Flag to handle offline scenarios|
|`Optional` @Input() isLoading: boolean| Flag to handle Lazy Loading `Default value is false`|
|`Optional` @Input() section: string| In case of QR code results cards, there is a need to show section|
