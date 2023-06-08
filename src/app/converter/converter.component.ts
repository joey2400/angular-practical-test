import { Component } from '@angular/core';
import { ConverterService } from '../converter-service/converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
  providers: [ConverterService]
})
export class ConverterComponent {
  constructor(private converterService: ConverterService) { }
  typedValue: string = '';
  convertedValue: string = '';

  onClick(value: string) {
    this.typedValue += value;
    console.log('You typed:', value);
    this.convertValue();
  }
  removeValue() {
    this.typedValue = this.typedValue.slice(0, -1);
    this.convertValue();
  }

  convertValue() {
    this.convertedValue = this.converterService.convertValue(this.typedValue);
  }
}
