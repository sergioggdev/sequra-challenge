import combineReducers from 'react-combine-reducers';
import { ActionType } from '@Models/actions';

import { PaymentsTypes, paymentsReducer, paymentsInitialState } from './payments';

export const [reducer, initialState] = combineReducers<CombinedReducerType>({
  payments: [paymentsReducer, paymentsInitialState],
});

export type CombinedStateType = {
  payments: PaymentsTypes;
};

type CombinedReducerType = (state: CombinedStateType, action: ActionType) => CombinedStateType;
