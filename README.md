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
|Feature| Notes| Selector|Code|
|--|--|--|------------------------------------------------------------------------------------------|
| [LibraryCard](./projects/common-consumption/src/lib/card/library-card/library-card.md) | Can be used in the library page for all consumption platforms| sb-library-card| *`<sb-library-card><sb-library-card>`*|
| [CourseCard](./projects/common-consumption/src/lib/card/course-card/course-card.md) | Can be used in the courses page for all consumption platforms| sb-course-card| *`<sb-course-card><sb-course-card>`*|
| [MyCourseCard](./projects/common-consumption/src/lib/card/my-course-card/my-course-card.md) | Can be used in the My courses section for all consumption platforms| sb-my-course-card| *`<sb-my-course-card></sb-my-course-card>`*|
| [TocCard](./projects/common-consumption/src/lib/card/toc-card/toc-card.md) | Can be used in the TOC card| sb-toc-card|NA|
| [LibraryCardsGrid](./projects/common-consumption/src/lib/layout/library-cards-grid/library-cards-grid.md) | Can be used in the courses page for all consumption platforms|sb-library-cards-grid
|*`<sb-library-cards-grid [title]="Grid Title" [isLoading]="isLoading[maxCardCount="3"><sb-library-cards-grid>`*|
| [CourseCardsGrid](./projects/common-consumption/src/lib/layout/course-cards-hlist/course-cards-hlist.md) | Can be used in the course page for all consumption platforms|sb-course-cards-hlist|
*`<sb-course-cards-hlist [multiRow]="true" [contentList]="range(15)"[type="'curiculum_course_card_grid'" [title]="'Courses'" [isLoading]="isLoading"><sb-course-cards-hlist>`*|
| [LibraryCardsStack](./projects/common-consumption/src/lib/layout/library-cards-stack/library-cards-stack.md) | Can be used in the courses page for all consumption platforms|sb-library-cards-stack|
*`<sb-library-cards-stack [title]="Stack Title"[contentList]="range(15)" [maxCardCount]="3" [isLoading]="isLoading"></sb-library-cards-stack>`*|
| [Confirmation Modal]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in places where a popup is needed with user prompt|sb-confirmation-modal||
| [LibraryFilters](./projects/common-consumption/src/lib/library-filters/library-filters/library-filters.md) | Can be used in the library page for all consumption platforms. |sb-library-filters||
| [FAQ Component](./projects/common-consumption/src/lib/faq/faq/faq.md) | Faq for Consumption Clients with intractable events. |sb-faq||
| [Card hover component](./projects/common-consumption/src/lib/card/card-hover/card-hover.md) | Can be used with library card to add overlay on card with action items . |sb-card-hover||
| [TOCItem component](./projects/common-consumption/src/lib/content-details/toc-item/toc-item.md) | Shows given  array of Items with accordion structure. |sb-toc-item||
| [TOCChildItem component](./projects/common-consumption/src/lib/content-details/toc-child-item/toc-child-item.md) | Shows given  array of Items with accordion structure. |sb-toc-item||
| [Member Card component](./projects/common-consumption/src/lib/card/member-card/member-card.md) | Member Card With Menu. |sb-member-card|
*`<sb-member-card></sb-member-card>`*|
| [Member List component](./projects/common-consumption/src/lib/layout/member-list/member-list.md) | Member List With Cards. |sb-member-list|
*`<sb-member-list [layoutConfig]="{size:'medium', isBold:false, isSelectable:true,view:'horizontal'}" [memberList]="range(15)" [isMenu]="false"(cardClick)="memberCardClick``  ($event)" (menuClick)="menuClick($event)"></`sb-member-list>`*|
| [Group Card component](./projects/common-consumption/src/lib/card/group-card/group-card.md) | 
Group Card. |sb-group-card|
*`<sb-group-card></sb-group-card>`*|

## Available directives
|Feature| Notes| directive|Code|
|--|--|--|------------------------------------------------------------------------------------------|
| CertificateDownloadAsImageDirective | Can be used on any DOM element to make it download certificate as image on click| sbCertificateDownloadAsImage| *`<button sbCertificateDownloadAsImage [template]="'<svg some-attr="$SOME_VAR"></svg>'" [metadata]="{$SOME_VAR: 'SOME_VALUE'}" [baseUrl]="'SAMPLE_BASE_URL'"></button>`*|
| CertificateDownloadAsPdfDirective | Can be used on any DOM element to make it download certificate as PDF on click| sbCertificateDownloadAsPdf| *`<button sbCertificateDownloadAsImage [template]="'<svg some-attr="$SOME_VAR"></svg>'" [metadata]="{$SOME_VAR: 'SOME_VALUE'}" [baseUrl]="'SAMPLE_BASE_URL'"></button>`*|

## Versions

| release branch    | npm package version | Angular Version |
|-------------------|---------------------|-----------------|
| v10_migration     |      4.11.0         |     Ng V10      |
| release-5.1.0_v11 |      4.12.0         |     Ng V11      |
