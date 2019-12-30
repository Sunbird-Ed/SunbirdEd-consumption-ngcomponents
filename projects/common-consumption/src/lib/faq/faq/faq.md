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