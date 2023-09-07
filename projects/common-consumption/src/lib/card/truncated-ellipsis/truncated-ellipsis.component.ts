import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-truncated-ellipsis',
  templateUrl: './truncated-ellipsis.component.html',
  styleUrls: ['./truncated-ellipsis.component.scss'],
})
export class TruncatedEllipsisComponent implements OnInit {
  @Input() arrayList: Array<Array<string>> = [];
  @Input() showCount = 1;
  @Input() separatorText = ',';

  displayTextArr = [];

  constructor() { }
  
  ngOnInit() {
    this.prepareDisplayText();
  }

  private prepareDisplayText() {
    this.displayTextArr = [];
    if (!this.arrayList || !this.arrayList.length) {
      return;
    }

    for (let i = 0; i < this.arrayList.length; i++) {
      const arr = this.arrayList[i];
      let displayText = '';
      for (let j = 0; j < arr.length; j++) {
        displayText += arr[j];
        if ((j + 1) < this.showCount && (j+1)<arr.length) {
          displayText += this.separatorText;
        } else {
          displayText += ((arr.length - this.showCount)>0) ? `... +${arr.length - this.showCount}` : '';
          break;
        }
      }
      this.displayTextArr.push(displayText);
    }
  }

}
