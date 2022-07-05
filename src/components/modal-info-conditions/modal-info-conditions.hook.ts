// Libraries
import { useEffect } from 'react';

// Globals
import { usePayments, useTranslation } from '@Hooks';

/** Local Hook to manage the component logic */
export default () => {
  // const { t } = useTranslation();
  const {
    isOpenModal,
    activePaymentMethod,
    actions: { handleOpenModal, sendAnalyticsEvent },
  } = usePayments();

  useEffect(() => {
    isOpenModal &&
      sendAnalyticsEvent({
        type: 'USER_VIEW',
        context: 'user view the modal conditions',
        location: 'modal_info_conditions',
      });
  }, [isOpenModal]);

  return {
    // t,
    state: { isOpenModal, activePaymentMethod },
    actions: {
      handleCloseModal: () => {
        handleOpenModal(false);
        sendAnalyticsEvent({
          type: 'USER_CLICK',
          context: 'user close modal conditions',
          location: 'modal_info_conditions',
        });
      },
      handleStopPropagation: (event: any) => {
        event.stopPropagation();
      },
    },
  };
};
