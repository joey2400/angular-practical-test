import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { StoreModule } from '@ngrx/store';
import { converterReducer } from './converter/state/converter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ converter: converterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
