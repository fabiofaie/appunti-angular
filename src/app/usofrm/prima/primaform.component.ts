import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-primaform',
  templateUrl: './primaform.component.html',
  styleUrls: ['./primaform.component.css'],
})
export class PrimaformComponent implements OnInit {
  countryList = [
    { id: 1, name: 'Milano' },
    { id: 2, name: 'Roma' },
    { id: 3, name: 'Montesilvano' },
    { id: 4, name: 'Spoltore' },
  ];

  contactForm: any;

  constructor() {}

  ngOnInit() {}

  onSubmit(contactForm) {
    console.log(contactForm.value);
  }
}
