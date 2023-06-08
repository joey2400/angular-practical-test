import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  constructor() { }
  convertNumbersToLetters(input: string): string {
    const numbers = input.split('#');
    let converted = '';
    for (const num of numbers) {
      let code = parseInt(num, 10);
      if (code >= 0) {
        code = (code % 26) + 65; // Convert to ASCII code
        const letter = String.fromCharCode(code);
        converted += letter;
      }
    }
    return converted;
  }
}
