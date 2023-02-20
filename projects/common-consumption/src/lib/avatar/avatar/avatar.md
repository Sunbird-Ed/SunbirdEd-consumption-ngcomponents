## Avatar
Can be used in the profile icon for all consumption platforms.

    import { AvatarComponent } from '@project-sunbird/common-consumption'

**Selector**: `sb-avatar`
**Exported as** : `AvatarComponent `
### Properties

|Name| Description |
|--|--|
|@Input() title: string|Avatar Name.|
|@Input() initial: string| Mostly Used for Initial Display in Avatar  |
|@Input() config: any| Mostly Used for representing Avatar  configuration. *`Example:{size:'medium OR large OR small', isLabel: true OR false, view:"vertical OR horizaontal"` |
|`Optional` @Input() identifier: string| Unique Identification of Avatar |
|`Optional` @Input() indexOfMember: number| Mostly used implicitly by List Component `Default value is 0 Used Mainly for Theming`|


