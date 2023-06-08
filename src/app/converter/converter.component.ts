import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as converterActions from '../converter/state/converter.actions';
import { ConverterState } from '../converter/state/converter.state';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  typedValue$ = this.store.select((state) => state.converter.typedValue);
  convertedValue$ = this.store.select((state) => state.converter.convertedValue);

  constructor(private store: Store<{ converter: ConverterState }>) { }

  typeNumber(number: string) {
    this.store.dispatch(converterActions.typeNumber({ number }));
    this.store.dispatch(converterActions.updateConvertedValue());
  }

  addSeparator() {
    this.store.dispatch(converterActions.addSeparator());
    this.store.dispatch(converterActions.updateConvertedValue());
  }

  removeLastValue() {
    this.store.dispatch(converterActions.removeLastValue());
    this.store.dispatch(converterActions.updateConvertedValue());
  }
}