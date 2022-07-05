import { SequraPaymentType } from '@Types';

export type PaymentsTypes = {
  isOpenModal: boolean;
  activePaymentMethod?: SequraPaymentType;
  paymentMethods: SequraPaymentType[];
};
