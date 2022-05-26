import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { FiglioComponent } from './figlio/figlio.component';
import { SolohtmlComponent } from './solohtml/solohtml.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    PadreComponent,
    FiglioComponent,
    SolohtmlComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
