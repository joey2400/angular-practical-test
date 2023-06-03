import { Component } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent {
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
    const numbers = this.typedValue.split('#');
    let converted = '';
    for (const num of numbers) {
      let code = parseInt(num, 10);
      if (code >= 0) {
        code = (code % 26) + 65; // Convert to ASCII code
        const letter = String.fromCharCode(code);
        converted += letter;
      }
    }
    this.convertedValue = converted;
  }
}
