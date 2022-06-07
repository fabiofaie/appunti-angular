import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { FiglioComponent } from './figlio/figlio.component';
import { SolohtmlComponent } from './solohtml/solohtml.component';
import { VariComponent } from './vari/vari.component';
import { PrimaformComponent } from './usofrm/prima/primaform.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    PadreComponent,
    FiglioComponent,
    SolohtmlComponent,
    VariComponent,
    PrimaformComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
