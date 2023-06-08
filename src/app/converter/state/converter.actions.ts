import { createAction, props } from '@ngrx/store';

export const typeNumber = createAction('[Converter] Type Number', props<{ number: string }>());
export const addSeparator = createAction('[Converter] Add Separator');
export const removeLastValue = createAction('[Converter] Remove Last Value');
export const updateConvertedValue = createAction('[Converter] Update Converted Value');