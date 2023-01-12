import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public res: number = 0;
  @Output() evenPlusMinusOne: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addOne() {
    this.res = this.res + 1;
    this.evenPlusMinusOne.emit(this.res);
  }

  substractOne() {
    this.res = this.res - 1;
    this.evenPlusMinusOne.emit(this.res);
  }
}
