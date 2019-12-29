
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