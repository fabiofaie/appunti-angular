import { Component, ViewChild } from '@angular/core';
import { FiglioComponent } from '../figlio/figlio.component';

@Component({
  selector: 'app-padre',
  templateUrl: 'padre.component.html',
  styleUrls: ['padre.component.css'],
})
export class PadreComponent {
  constructor() {}

  // deve esserci un selettore di FiglioComponent nel mio Html
  @ViewChild(FiglioComponent, { static: true })
  child: FiglioComponent;

  incrementa() {
    this.child.incrementaContatore();
  }

  decrementa() {
    this.child.decrementaContatore();
  }

  azzera() {
    this.child.contatore = 0;
  }
}
