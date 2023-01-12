import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css'],
})
export class Exercice2Component implements OnInit {
  public valeur?: string;
  public valeurEntree?: string;
  constructor() {}

  ngOnInit(): void {}

  myOnKey(event: any) {
    this.valeurEntree = event.target.value;
    console.log('Ici child ' + this.valeurEntree);
    this.valeur = this.valeurEntree;
  }
}
