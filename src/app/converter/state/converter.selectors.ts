import { createSelector } from '@ngrx/store';
import { ConverterState } from './converter.state';

const selectConverterState = (state: { converter: ConverterState }) => state.converter;

// Selector to get the typedValue from the converter state
export const selectTypedValue = createSelector(
    selectConverterState,
    (state: ConverterState) => state.typedValue
);

// Selector to get the convertedValue from the converter state
export const selectConvertedValue = createSelector(
    selectConverterState,
    (state: ConverterState) => state.convertedValue
);







