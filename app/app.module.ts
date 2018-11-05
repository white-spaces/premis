import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrettirComponent } from './frettir/frettir.component';
import { FrettaListiComponent } from './frettir/fretta-listi/frettir-listi.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { FrettirNyastaNyttComponent } from './frettir/frettir-nyasta-nytt/frettir-nyasta-nytt.component';

@NgModule({
  declarations: [
    AppComponent,
    FrettirComponent,
    FrettaListiComponent,
    FrontPageComponent,
    FrettirNyastaNyttComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
