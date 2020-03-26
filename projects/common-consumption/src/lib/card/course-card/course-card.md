## CourseCard
Can be used in the library page for all consumption platforms.

    import { CourseCardComponent } from '@project-sunbird/common-consumption/card/CourseCardComponent'

**Selector**: `sb-course-card`
**Exported as** : `CourseCardComponent `
### Properties

|Name| Description |
|--|--|
|@Input() content: ICourse| Content Object |
|@Input() cardImg: string|Image to be displayed in card in all possible scenarios. *`Note: Logic behind the image is not part of library in case of online,offline, and save resource`*|
|@Input() moreInfoLabel:string|Label to be displayed in the meta data. *`Example: Medium, Section`* |
|`Optional` @Input() isMobile: boolean| Flag to distinguish mobile platform |
|`Optional` @Input() isOffline: boolean| Flag to handle offline scenarios|
|`Optional` @Input() isLoading: boolean| Flag to handle Lazy Loading `Default value is false`|
|`Optional` @Input() section: string| In case of QR code results cards, there is a need to show section|
