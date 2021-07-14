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
                    (click)="cardClick($event)" tabindex="0" [cardImg]="content?.appIcon"
                    [hover-template]="hoverTemplate">

                    <ng-template #hoverTemplate let-hoverData="hoverData" 
					let-content="content">
                        <sb-card-hover class="card-hover" [hoverData]="hoverData"
						[content]="content" (hoverActionClick)="hoverActionClicked($event)">
                        </sb-card-hover>
                    </ng-template>
	
</sb-library-card>
```

