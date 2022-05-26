import { Component } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: 'figlio.component.html',
  styleUrls: ['./figlio.component.css'],
})
export class FiglioComponent {
  constructor() {}

  contatore = 0;

  incrementaContatore() {
    this.contatore++;
  }
  decrementaContatore() {
    this.contatore--;
  }
}
