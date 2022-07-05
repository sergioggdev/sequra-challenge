import { PaymentsActionType as ActionType } from '@Models/actions';
import { PaymentsTypes as StateTypes } from './payments.types';

export const paymentsReducer = (state: StateTypes, action: ActionType) => {
  switch (action.type) {
    case 'SET_MODAL_STATE':
      return {
        ...state,
        isOpenModal: action.payload.state,
      };

    case 'SET_PAYMENT_METHODS':
      return {
        ...state,
        paymentMethods: action.payload.paymentMethods,
      };

    case 'SET_ENABLE_PAYMENT_METHOD':
      return {
        ...state,
        activePaymentMethod: action.payload.activePaymentMethod,
      };

    default:
      return state;
  }
};
