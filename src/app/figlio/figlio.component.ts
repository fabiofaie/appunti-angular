import { Component } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: 'figlio.component.html',
  styleUrls: ['./figlio.component.css'],
})
export class FiglioComponent {
  constructor() {}

  count = 0;

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
