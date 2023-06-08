import { createReducer, on } from '@ngrx/store';
import * as converterActions from './converter.actions';
import { ConverterState } from './converter.state';

const initialState: ConverterState = {
    typedValue: '',
    convertedValue: '',
};

export const converterReducer = createReducer(
    initialState,
    on(converterActions.typeNumber, (state, { number }) => ({ ...state, typedValue: state.typedValue + number })),
    on(converterActions.addSeparator, (state) => ({ ...state, typedValue: state.typedValue + '#' })),
    on(converterActions.removeLastValue, (state) => ({ ...state, typedValue: state.typedValue.slice(0, -1) })),
    on(converterActions.updateConvertedValue, (state) => {
        const numbers = state.typedValue.split('#');
        let converted = ""
        for (const num of numbers) {
            let code = parseInt(num, 10);
            if (code >= 0) {
                code = (code % 26) + 65; // Convert to ASCII code
                const letter = String.fromCharCode(code);
                converted += letter;
            }
        }
        return { ...state, convertedValue: converted };
    })
);
