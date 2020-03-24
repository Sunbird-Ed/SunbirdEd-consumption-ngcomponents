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
	    
	    "./node_modules/common-consumption-styles/assets/_styles.scss"
	    
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
| [LibraryCard](./projects/common-consumption/src/lib/card/library-card/library-card.md) | Can be used in the library page for all consumption platforms| sb-library-card|
| [CourseCard](./projects/common-consumption/src/lib/card/course-card/course-card.md) | Can be used in the courses page for all consumption platforms| sb-course-card|
| [MyCourseCard](./projects/common-consumption/src/lib/card/my-course-card/my-course-card.md) | Can be used in the My courses section for all consumption platforms| sb-my-course-card|
| [LibraryCardsGrid](./projects/common-consumption/src/lib/layout/library-cards-grid/library-cards-grid.md) | Can be used in the courses page for all consumption platforms|sb-library-cards-grid|
| [CourseCardsGrid](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents) | Can be used in the course page for all consumption platforms|sb-course-cards-hlist|
| [LibraryCardsStack](./projects/common-consumption/src/lib/layout/library-cards-stack/library-cards-stack.md) | Can be used in the courses page for all consumption platforms|sb-library-cards-stack|
| [Confirmation Modal]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in places where a popup is needed with user prompt|sb-confirmation-modal|
| [LibraryFilters](./projects/common-consumption/src/lib/library-filters/library-filters/library-filters.md) | Can be used in the library page for all consumption platforms. |sb-library-filters|
| [FAQ Component](./projects/common-consumption/src/lib/faq/faq/faq.md) | Faq for Consumption Clients with intractable events. |sb-faq|
| [Card hover component](./projects/common-consumption/src/lib/card/card-hover/card-hover.md) | Can be used with library card to add overlay on card with action items . |sb-card-hover|
| [TOCItem component](./projects/common-consumption/src/lib/content-details/toc-item/toc-item.md) | Shows given  array of Items with accordion structure. |sb-toc-item|

