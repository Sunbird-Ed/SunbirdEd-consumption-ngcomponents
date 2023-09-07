# Common angular components for Sunbird consumption!
Contains common UI components powered by angular. These components are designed to be used in sunbird consumption platforms *(mobile app, web portal, offline desktop app)* to drive reusability, maintainability hence reducing the redundant development effort significantly.

# Getting Started
For help getting started with a new Angular app, check out the Angular CLI.
For existing apps, follow these steps to begin using .

## Step 1: Install the package
    npm install @project-sunbird/common-consumption --save
    npm install @project-sunbird/sb-styles --save

## Step 2: Include the sb-styles and assets in angular.json
    "styles": [
    
    ...
    
    ...
    
    "./node_modules/@project-sunbird/sb-styles/assets/_styles.scss"
    
    ]
  Add following under architect.build.assets

     {
	    ...
	    "build": {
	    
	    "builder": "@angular-devkit/build-angular:browser",
	    
	    "options": {
	    
		    ...
		    ...
    
		    "assets": [
			   ...
			   ...
			    {
				    "glob": "**/*.*",
				    "input": "./node_modules/@project-sunbird/common-consumption/assets",
				    "output": "./assets/common-consumption"
			    }
		    ],
	    "styles": [
	    ...
	    
	    "./node_modules/@project-sunbird/sb-styles/assets/_styles.scss"
	    
	    ],
	    
	    ...
	    ...
    
    },

## Step 3: Import the modules and components
Import the NgModule for each component you want to use:
       
    import { CommonConsumptionModule} from '@project-sunbird/common-consumption';
    
    @NgModule({
	    ...
	    
	    imports: [CommonConsumptionModule],
	    
	    ...
    })
    export class TestAppModule { }

Alternatively, you can create a separate NgModule that imports and then re-exports all of the Angular components that you will use in your application. By exporting them again, other modules can simply include your CustomSunbirdComponentsModule wherever components are needed, and automatically get all of the exported modules. A good place for importing/exporting the application-wide modules is the SharedModule.

    import { CardsModule } from '@project-sunbird/common-consumption/card';

    import { PopoverModule } from '@project-sunbird/common-consumption/popover';

    @NgModule({
    
    ...
    
    imports: [CardsModule, PopoverModule],
    
    exports: [CardsModule, PopoverModule],
    
    ...
    
    })


    export class MyOwnCustomSunbirdComponentsModule { }

## Available components

|Feature| Notes| Selector|
|--|--|--|
| [LibraryCard](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents) | Can be used in the library page for all consumption platforms| sb-library-card|
| [CourseCard](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents) | Can be used in the courses page for all consumption platforms| sb-course-card|
| [TocCard](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents/blob/master/projects/common-consumption/src/lib/card/toc-card/toc-card.md) | Can be used in the My courses section for all consumption platforms| sb-my-course-card|
| [LibraryCardHList](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents) | Can be used in the library page for all consumption platforms|sb-library-cards-grid|
| [CourseCardsGrid](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents) | Can be used in the course page for all consumption platforms|sb-course-cards-hlist|
| [LibraryCardsStack](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents) | Can be used in the courses page for all consumption platforms|sb-library-cards-stack|
| [Confirmation Modal](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents) | Can be used in places where a popup is needed with user prompt|sb-confirmation-modal|
| [LibraryFilters](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents) | Can be used in the library page for all consumption platforms. |sb-library-filters|
| [FAQ Component](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents) | Faq for Consumption Clients with intractable events. |sb-faq|
| [Card hover component](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents) | Can be used with library card to add overlay on card with action items . |sb-card-hover|
| [TOCItem component](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents) | Shows given  array of Items with accordion structure. |sb-toc-item|
| [TOCChildItem component](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents/blob/master/projects/common-consumption/src/lib/content-details/toc-child-item/toc-child-item.md) | Shows given  array of Items with accordion structure. |sb-toc-item|
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
|`Optional` @Input() section: string| In case of QR code results cards, there is a need to show section|
|`Optional` @Input('hover-template') gridTemplate: TemplateRef<any>;| When card has **hover data**, the template reference of the hover component needs to be injected|


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
|`Optional` @Input('hover-template') gridTemplate: TemplateRef<any>;| When card has **hover data**, the template reference of the hover component needs to be injected|

### Events

|Name| Description |
|--|--|
|@Output() viewMoreClick| Emits this event when view all button is clicked |
|@Output() cardClick| Emits this event when card is clicked |

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

## LibraryFilters
Can be used in the library page for all consumption platforms.

`import { LibraryFiltersComponent } from '@project-sunbird/common-consumption/library-filters';`

**Selector**: `sb-library-filters`
**Exported as** : `LibraryFiltersComponent`

### Properties

|Name| Description |
|--|--|
|@Input() list: Array<<string>string>| Array of strings |
|@Input() layout: LibraryFiltersLayout| import the interface **LibraryFiltersLayout**, to know different possible values of filter types.*`Example: round, square`* OR *`Example: LibraryFiltersLayout.ROUND, LibraryFiltersLayout.SQUARE`*
|@Input() selectedItems: Array<<number>number> | Array of indexes to select
  

### Events

|Name| Description |
|--|--|
@Output() selectedFilter | Emits this event when user clicks on the filter item. `Example: event.data = {text: "english", selected: true, index: 0}`
@Output() selectedMimeType | Emits this event when user clicks on the mimeType filter item. `Example: event.data = {value: ["video/mp4", "video/x-youtube", "video/webm], text: "video", selected: true, type: "video", index: 1}`

## FAQ Component
Consumption Clients intend to use this component for FAQ in their apps.

`import { FaqComponent } from '@Sunbird/components/faq'`
**Selector**: `sb-faq`
**Exported as** : `FaqComponent`

### Properties

|Name| Description |
|--|--|
|@Input() data: json| Please refer to faq Spec File for More details in the library |
|@Input() appName: string| Name of your app

### Events

| Name                         | Description |
|------------------------------|-------------|
| @Output() toggleGroupEvent   | Emits this event when user clicks on the faq accordion |
| @Output() yesClickedEvent    | Emits this event when user clicks on the option yes inside faq |
| @Output() noClickedEvent     | Emits this event when user clicks on the option yes inside faq |
| @Output() submitClickedEvent | Emits this event when user clicks on the option submit inside faq |

## Card hover Component
Card hover component is intended to be used with Library card component. On hover of the card, this component adds an overlay with actions to be shows passed as input to it.

`import { CardHoverComponent } from '@Sunbird/components/card-hover'`

**Selector**: `sb-card-hover`
**Exported as** : `CardHoverComponent`

### Properties
|Name| Description |
|--|--|
|@Input() hoverData: json| Please refer example for More details in the library |
  
### Events

|Name| Description |
|--|--|
|@Output() hoverActionClick | Emits this event when user clicks on the any action item, this will also have the card information on which the action is clicked  |

Sample hover data : 
```json
"hoverData": {
        "note": "Go to “My Downloads” to find this textbook",
        "actions": [
          {
            "type": "save",
            "label": "Save to pen-drive",
            "disabled": true
          },
          {
            "type": "open",
            "label": "Open"
          }
        ]
      }
```

Example :
```html
<sb-library-card [content]="content" [type]="recentlyViewedCard"
                    (click)="cardClick($event)" [cardImg]="content?.appIcon"
                    [hover-template]="hoverTemplate">

                    <ng-template #hoverTemplate let-hoverData="hoverData" 
					let-content="content">
                        <sb-card-hover class="card-hover" [hoverData]="hoverData"
						[content]="content" (hoverActionClick)="hoverActionClicked($event)">
                        </sb-card-hover>
                    </ng-template>
	
</sb-library-card>
```
## Versions

| release branch    | npm package version | Angular Version |
|-------------------|---------------------|-----------------|
| v10_migration     |      4.11.0         |     Ng V10      |
| release-5.1.0_v11 |      4.12.1         |     Ng V11      |