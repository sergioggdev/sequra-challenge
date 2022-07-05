// Libraries
import { useState, useEffect } from 'react';

// Globals
import { usePayments, useTranslation } from '@Hooks';

// Locals
import { SelectValueType } from './product-payment-section.types';

/** Local Hook to manage the component logic */
export default () => {
  const [optionValue, setOptionValue] = useState<SelectValueType>();
  // const { t } = useTranslation();

  useEffect(() => {
    sendAnalyticsEvent({
      type: 'USER_VIEW',
      context: 'user view Sequra payments',
      location: 'product_payment_section',
    });
  }, []);

  useEffect(() => {
    if (optionValue > 0)
      setEnablePaymentMethod(
        paymentMethods.find(paymentMethod => paymentMethod.instalment_count === +optionValue),
      );
  }, [optionValue]);

  const {
    paymentMethods,
    actions: {
      createGlobalPaymentConditionsSequra,
      handleOpenModal,
      setEnablePaymentMethod,
      sendAnalyticsEvent,
    },
  } = usePayments();

  createGlobalPaymentConditionsSequra();

  return {
    // t,
    state: { optionValue, paymentMethods },
    actions: {
      handleClickMoreInfo: () => {
        if (optionValue) {
          sendAnalyticsEvent({
            type: 'USER_CLICK',
            context: 'user view more info confitions',
            location: 'product_payment_section',
          });
          handleOpenModal(true);
        } else {
          sendAnalyticsEvent({
            type: 'USER_CLICK',
            context: 'alert without payment method',
            location: 'product_payment_section',
          });
          alert('Debes seleccionar un método de pago');
        }
      },
      setOptionValue: (event: any) => {
        setOptionValue(event.target.value);
        sendAnalyticsEvent({
          type: 'USER_SELECT',
          context: 'user select payment method',
          location: 'product_payment_section',
        });
      },
    },
  };
};
