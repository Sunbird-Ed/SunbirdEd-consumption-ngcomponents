## Member Card
Can be used in the Member Listing for all consumption platforms.

    import { MemberCardComponent } from '@project-sunbird/common-consumption/card/MemberCardComponent'

**Selector**: `sb-member-card`
**Exported as** : `MemberCardComponent `
### Properties

|Name| Description |
|--|--|
|@Input() title: string|Member Name.|
|@Input() identifier:string|Unique identifier for member. *`Example: Medium, Section`* |
|@Input() initial: string| Mostly Used for Initial Display in Member Card |
|@Input() config: any| Mostly Used for representing Member Card configuration. *`Example:{size:'medium OR large OR small', isBold:false OR true, isSelectable:true OR false, view:"vertical OR horizaontal"` |
|`Optional` @Input() identifier: string| Unique Identification of member |
|`Optional` @Input() isAdmin: boolean| Flag to distinguish is member is admin |
|`Optional` @Input() cardImg: boolean| Image to display in list |
|`Optional` @Input() isMenu: boolean| Flag to handle menu display. *`Example: Please Use Custom Menu Implementation for your respective sections. Only output event to be shared`*|
|`Optional` @Input() indexOfMember: number| Mostly used implicitly by List Component `Default value is 0 Used Mainly for Theming`|


### Events

|Name| Description |
|--|--|
|@Output() menuClick| Emits this event when menu button is clicked |
|@Output() cardClick| Emits this event when card is clicked |

