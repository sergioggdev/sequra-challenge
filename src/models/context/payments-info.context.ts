import { Dispatch } from 'react';

import {
  ActionType,
  handleOpenModal,
  setPaymentMethods,
  setEnablePaymentMethod,
} from '@Models/actions';
import { CombinedStateType } from '@Models/reducers';
import { SequraPaymentType, AnalyticsEventType } from '@Types';

export const paymentsContext = (state: CombinedStateType, dispatch: Dispatch<ActionType>) => ({
  ...state.payments,
  actions: {
    handleOpenModal: (state: boolean) => dispatch(handleOpenModal(state)),
    setEnablePaymentMethod: (activePaymentMethod: SequraPaymentType) =>
      dispatch(setEnablePaymentMethod(activePaymentMethod)),
    createGlobalPaymentConditionsSequra: () => {
      // ? Create global function to obtain Sequra Payment Conditions
      window.Sequra.getPaymentConditions = async price => {
        const response = await fetch(
          `${process.env.SEQURA_API}/credit_agreements?totalWithTax=${price}`,
          { method: 'GET' },
        ).then(response => response.json());
        dispatch(setPaymentMethods(response));
      };
    },
    sendAnalyticsEvent: async (analyticsEvent: AnalyticsEventType) =>
      await fetch(`${process.env.SEQURA_API}/events`, {
        method: 'POST',
        body: JSON.stringify(analyticsEvent),
        headers: { 'Content-Type': 'application/json' },
      }),
  },
});
