import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-test',
  templateUrl: './counter-test.component.html',
  styleUrls: ['./counter-test.component.css']
})
export class CounterTestComponent implements OnInit {

  @Output() updateCounter: EventEmitter<string> = new EventEmitter<string>();

  update(operation) {
    this.updateCounter.emit(operation);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
