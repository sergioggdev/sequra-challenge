import React, { useReducer, createContext, ReactNode } from 'react';

import { reducer, initialState } from './reducers';
import { createReduxContext } from './context';
import { CombinedStateType } from '@Models/reducers';

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export const Context = createContext(createReduxContext(initialState, () => {}));

export const Provider = ({
  mockProps,
  children,
}: {
  children: ReactNode;
  mockProps?: Partial<CombinedStateType>;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={createReduxContext({ ...state, ...mockProps }, dispatch)}>
      {children}
    </Context.Provider>
  );
};
