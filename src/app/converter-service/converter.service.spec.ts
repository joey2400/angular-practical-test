import { ConverterService } from './converter.service';

describe('ConverterService', () => {
  let service: ConverterService;

  beforeEach(() => {
    service = new ConverterService();
  });

  it('should convert numbers to letters', () => {
    const input = '1#2#3#4#5';
    const expectedOutput = 'BCDEF';
    const result = service.convertNumbersToLetters(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle empty input', () => {
    const input = '';
    const expectedOutput = '';
    const result = service.convertNumbersToLetters(input);
    expect(result).toEqual(expectedOutput);
  });

});