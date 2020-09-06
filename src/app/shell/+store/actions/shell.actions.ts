import { createAction, props } from '@ngrx/store';

export const loadShells = createAction(
  '[Shell] Load Shells'
);

export const loadShellsSuccess = createAction(
  '[Shell] Load Shells Success',
  props<{ data: any }>()
);

export const loadShellsFailure = createAction(
  '[Shell] Load Shells Failure',
  props<{ error: any }>()
);
