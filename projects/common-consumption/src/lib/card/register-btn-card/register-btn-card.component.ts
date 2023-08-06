import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Button {
  type:string;
  text:string;
}

interface RegCardData{
  imgUrl:string;
  title:string;
  content:string;
  button:Button
}

@Component({
  selector: 'register-btn-card',
  templateUrl: './register-btn-card.component.html',
  styleUrls: ['./register-btn-card.component.scss']
})
export class RegisterBtnCardComponent implements OnInit {
  @Input() regCardData: RegCardData;
  @Output() navigateToRegister = new EventEmitter()
  constructor() { }

  ngOnInit(): void {}

  navigateToRegisterPage(link:string){
    this.navigateToRegister.emit(link)
  }

}
