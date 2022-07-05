import {
  HandleOpenModalActionFnType,
  SetPaymentMethodsActionFnType,
  SetEnablePaymentMethodActionFnType,
} from './payments-info.types';

export const handleOpenModal: HandleOpenModalActionFnType = state => ({
  type: 'SET_MODAL_STATE',
  payload: { state },
});

export const setPaymentMethods: SetPaymentMethodsActionFnType = paymentMethods => ({
  type: 'SET_PAYMENT_METHODS',
  payload: { paymentMethods },
});

export const setEnablePaymentMethod: SetEnablePaymentMethodActionFnType = activePaymentMethod => ({
  type: 'SET_ENABLE_PAYMENT_METHOD',
  payload: { activePaymentMethod },
});
