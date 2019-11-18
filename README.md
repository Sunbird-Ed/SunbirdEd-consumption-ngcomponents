  

# Common angular components for Sunbird consumption!

  

Contains common UI components powered by angular. These components are designed to be used in sunbird consumption platforms *(mobile app, web portal, offline desktop app)* to drive reusability, maintainability hence reducing the redundant development effort significantly.

  

# Getting Started

  

For help getting started with a new Angular app, check out the Angular CLI.

  

For existing apps, follow these steps to begin using .

  

## Step 1: Install the package

  

    npm install @project-sunbird/common-consumption --save

    npm install common-consumption-styles --save

  

## Step 2: Include the common-consumption-styles and assets in angular.json

  

    "styles": [
    
    ...
    
    ...
    
    "./node_modules/common-consumption-styles/assets/_styles.scss"
    
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
		    
			    "src/favicon.ico",
			    
			    "src/assets",
			    
			    {
				    "glob": "**/*.*",
				    "input": "./node_modules/@project-sunbird/common-consumption/assets",
				    "output": "./assets/common-consumption"
			    }
		    
		    ],
    
	    "styles": [
	    
	    "src/styles.scss",
	    
	    "./node_modules/common-consumption-styles/assets/_styles.scss"
	    
	    ],
	    
	    "scripts": [],
	    
	    "preserveSymlinks": true
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
| [LibraryCard]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in the library page for all consumption platforms| sb-library-card|
| [CourseCard]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in the courses page for all consumption platforms| sb-course-card|
| [LibraryCardsGrid]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in the courses page for all consumption platforms|sb-library-cards-grid|
| [LibraryCardsStack]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in the courses page for all consumption platforms|sb-library-cards-stack|
| [Confirmation Modal]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in places where a popup is needed with user prompt|sb-confirmation-modal|
| [LibraryFilters]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in the library page for all consumption platforms. |sb-library-filters|
| [FAQ Component]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Faq for Consumption Clients with interactable events. |sb-faq|

  

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

  

  

## LibraryCardsGrid

  

Can be used in the library page for all consumption platforms targetting web platform

  

    import { SbLibraryCardsGrid } form '@project-sunbird/common-consumption/layout/gridcards';

  

Selector: `sb-library-cards-grid`

  

Exported as: `SbLibraryCardsGrid`

  

### Properties

  

|Name| Description |
|--|--|
|@Input() title: boolean| Name that represents the section |
|@Input() contentList: collection<content>| Collection of contents, where each content is a object from server API. **` Note: Add cardImg property for each item in list before passing contentList`** |
|`Optional` @Input() maxCardCount: Number| Number of cards to display the viewing area `Default value is 3`|
|`Optional` @Input() viewMoreButtonText: string| custom text to show in place of view all button, if there are more number of cards than "maxCardCount" then a button needs to be displayed. `Default value is "View All"`|

  

### Events

  

|Name| Description |
|--|--|
|@Output() viewMoreClick| Emits this event when view all button is clicked |
|@Output() cardClick| Emits this event when card is clicked |

  

## LibraryCardsStackComponent

  

Can be used in the library page for mobile consumption

  

`import { LibraryCardsStackComponent } form '@project-sunbird/common-consumption/layout/stackcards';`

  

Selector: `sb-library-cards-stack`

  

Exported as: `LibraryCardsStackComponent`

  

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
@Output() selectedFilter | Emmits this event when user clicks on the filter item. `Example: event.data = {text: "english", selected: true, index: 0}`

  

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

  

|Name| Description |
|--|--|
|@Output() toggleGroupEvent | Emmits this event when user clicks on the faq accordion |
|@Output() yesClickedEvent | Emmits this event when user clicks on the option yes inside faq |
|@Output() noClickedEvent | Emmits this event when user clicks on the option yes inside faq |
|@Output() submitClickedEvent | Emmits this event when user clicks on the option submit inside faq |


