import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-solohtml',
  template: `
  <div>
    <p #esempio>Qui c'è del testo di esempio, e un contatore</p>
    <button (click)="cambia()">cambia testo</button>
  </div>
`,
})
export class SolohtmlComponent {

  // qua ci riferisce direttamente all'elemento html
  @ViewChild('esempio', { static: true }) para: ElementRef;

  conta: number = 0;

  cambia() {
    this.conta++;
    this.para.nativeElement.innerHTML = 'adesso è cambiato! ' + this.conta;
  }
}
