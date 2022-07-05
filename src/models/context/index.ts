import { Dispatch } from 'react';
import { ActionType } from '@Models/actions';
import { CombinedStateType } from '@Models/reducers';

import { paymentsContext } from './payments-info.context';

export const createReduxContext = (state: CombinedStateType, dispatch: Dispatch<ActionType>) => ({
  payments: paymentsContext(state, dispatch),
});
