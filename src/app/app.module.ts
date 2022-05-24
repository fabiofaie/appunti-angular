import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PadreComponent } from './padre/padre.component';
import { FiglioComponent } from './figlio/figlio.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, PadreComponent, FiglioComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
