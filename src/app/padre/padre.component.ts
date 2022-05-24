import { Component, OnInit, ViewChild } from '@angular/core';
import { FiglioComponent } from '../figlio/figlio.component';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // deve esserci un selettore di FiglioComponent nel mio Html
  @ViewChild(FiglioComponent, { static: true })
  private child: FiglioComponent;

  increment() {
    this.child.increment();
  }

  decrement() {
    this.child.decrement();
  }
}
