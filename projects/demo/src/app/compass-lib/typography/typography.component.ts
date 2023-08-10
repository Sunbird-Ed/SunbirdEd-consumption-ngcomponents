import { Component, OnInit } from '@angular/core';

const TYPOGRAPHY_DATA = [
  {style:'Display 1', class:'display-one', typeface: 'Montserrat', weight:'600', size:'36px', spacing:'-0.2', height:'48'},
  {style:'Headline', class:'headline', typeface: 'Montserrat', weight:'600', size:'24px', spacing:'0', height:'36'},
  {style:'title 1', class:'title', typeface: 'Montserrat', weight:'600', size:'20px', spacing:'0.12', height:'28'},
  {style:'Sub Heading 1', class:'sub-heading-one', typeface: 'Montserrat', weight:'600', size:'16px', spacing:'0.12', height:'24'},
  {style:'Sub Heading Mobile', class:'sub-heading-mobile', typeface: 'Lato', weight:'600', size:'16px', spacing:'0.12', height:'24'},
  {style:'Sub Heading 2', class:'sub-heading-two', typeface: 'Lato', weight:'700', size:'14px', spacing:'0.12', height:'20'},
  {style:'Body 1', class:'body-one', typeface: 'Lato', weight:'400', size:'16px', spacing:'0.25', height:'24'},
  {style:'Body 2', class:'body-two', typeface: 'Lato', weight:'400', size:'14px', spacing:'0.25', height:'20'},
  {style:'Button', class:'btn', typeface: 'Lato', weight:'700', size:'14px', spacing:'0.25', height:'16'},
  {style:'Label', class:'label', typeface: 'Lato', weight:'400', size:'10px', spacing:'0.5', height:'12'}
]
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {
  displayedColumns: string[] = ['style', 'class', 'typeface', 'weight', 'size', 'spacing', 'height'];
  dataSource = TYPOGRAPHY_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
