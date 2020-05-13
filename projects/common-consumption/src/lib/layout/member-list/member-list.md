## LibraryCardsGrid
Can be used to display Member List for all consumption platforms

    import { MemberListComponent } form '@project-sunbird/common-consumption/layout/member-list';

**Selector:** `sb-member-list`
**Exported as:** `MemberListComponent`

### Properties

|Name| Description |
|--|--|
|@Input() memberList: Array| Name that represents the section *`Pass Array Of Object like this`
`[{title:'',initial:'',isAdmin:true,id:''},{title:'',initial:'',isAdmin:true,id:''}]`
*|
|@Input() isMenu: boolean| Flag to distinguish menu display |


### Events

|Name| Description |
|--|--|
|@Output() menuClick| Emits this event when menu button is clicked |
|@Output() cardClick| Emits this event when card is clicked |
