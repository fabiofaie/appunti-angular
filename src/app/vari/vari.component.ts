import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vari',
  templateUrl: './vari.component.html',
  styleUrls: ['./vari.component.css']
})
export class VariComponent implements OnInit {

  constructor() { }
  title = 'esempio del caso';
  isDisabled = true;
  ngOnInit() {
  }

}