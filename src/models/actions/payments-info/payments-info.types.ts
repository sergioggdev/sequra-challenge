import { SequraPaymentType } from '@Types';

// handleOpenModal types
type HandleOpenModalActionType = {
  type: 'SET_MODAL_STATE';
  payload: { state: boolean };
};
export type HandleOpenModalActionFnType = (state: boolean) => HandleOpenModalActionType;

// setPaymentMethods types
type SetPaymentMethodsActionType = {
  type: 'SET_PAYMENT_METHODS';
  payload: { paymentMethods: SequraPaymentType[] };
};
export type SetPaymentMethodsActionFnType = (
  paymentMethods: SequraPaymentType[],
) => SetPaymentMethodsActionType;

// setEneablePaymentMethod types
type SetEnablePaymentMethodActionType = {
  type: 'SET_ENABLE_PAYMENT_METHOD';
  payload: { activePaymentMethod: SequraPaymentType };
};
export type SetEnablePaymentMethodActionFnType = (
  activePaymentMethod: SequraPaymentType,
) => SetEnablePaymentMethodActionType;

// ? Export all actions types
export type PaymentsActionType =
  | HandleOpenModalActionType
  | SetPaymentMethodsActionType
  | SetEnablePaymentMethodActionType;
