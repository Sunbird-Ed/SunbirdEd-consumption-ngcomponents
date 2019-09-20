# Common angular components for Sunbird consumption!

Contains common UI components powered by angular. These components are designed to be used in sunbird consumption platforms *(mobile app, web portal, offline desktop app)* to drive reusability, maintainability hence reducing the redundant development effort significantly.


# Getting Started

For help getting started with a new Angular app, check out the Angular CLI.

For existing apps, follow these steps to begin using .

## Step 1: Install the package

    npm install  @sunbird/components --save

## Step 2: Install the styles library from sunbird

    npm install @sunbird/styles --save

## Step 3: Import the modules and components

Import the NgModule for each component you want to use:

    import { ConsumptionComponentsModule } from 'consumption-components';

        @NgModule({
        ...
        imports: [ConsumptionComponentsModule],
        ...
        })
        export class PizzaPartyAppModule { }
 Alternatively, you can create a separate NgModule that imports and then re-exports all of the Angular components that you will use in your application.  By exporting them again, other modules can simply include your CustomSunbirdComponentsModule wherever components are needed,  and automatically get all of the exported modules. A good place for importing/exporting the application-wide modules is the SharedModule.
 

    import {SbLibraryCardModule} from '@sunbird/components/card';
    import {SbCourseCardModule} from '@sunbird/components/popover';

    @NgModule({
    ...
    imports: [SbLibraryCardModule, SbCourseCardModule],
    exports: [SbLibraryCardModule, SbCourseCardModule],
    ...
    })
    export class MyOwnCustomSunbirdComponentsModule { }

## Available components
| Feature | Notes|
|--|--|
|  [Library Cards]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in the library page for all consumption platforms|
|  [Course Cards]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in the courses page for all consumption platforms|
|  [Library Cards Grid]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in the courses page for all consumption platforms|
|  [Library Cards stacked]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in the courses page for all consumption platforms|
|  [Confirmation Modal]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in places where a popup is needed with user prompt|




## LibraryCardsGridComponent

Can be used in the courses page for all consumption platforms

    import SbLibraryCardsGrid form '@sunbird/components/SbLibraryCardsGrid'
    
Selector:  `sb-library-cards-grid`
Exported as:  `SbLibraryCardsGrid`

### Properties
|Name| Description |
|--|--|
|@Input() title: boolean| Name that represents the section |
|@Input() contentList: collection<content>| Collection of contents, where each content is a object from server API |
|@Input() cardDisplayCount: Number| Number of  |
|@Input() viewMoreButtonText: string| adasdo ijoaisdoias doi |


onText
@Output() buttonClick
@Output() cardClick




