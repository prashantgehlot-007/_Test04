import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-ex',
  templateUrl: './data-binding-ex.component.html',
  styleUrls: ['./data-binding-ex.component.css']
})
export class DataBindingExComponent implements OnInit {

  message = `Check from Component`;
  animal = `🦘`;

  constructor() { }

  ngOnInit(): void {}

  getmessage() {
    return this.message;
  }
  onclick() {
    alert("You have clicked this");
  }

}
