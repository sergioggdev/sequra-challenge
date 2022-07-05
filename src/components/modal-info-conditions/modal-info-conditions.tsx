// Libraries
import React from 'react';

// Globals

// Locals
import {
  Container,
  Modal,
  ModalText,
  ModalContentArea,
  ModalContentRow,
} from './modal-info-conditions.styled';
import { Props } from './modal-info-conditions.types';
import useModalInfoConditions from './modal-info-conditions.hook';

/** Component to show Select with diferent payments type */
export const ModalInfoConditions = ({}: Props) => {
  const {
    // t,
    state: { isOpenModal, activePaymentMethod },
    actions: { handleCloseModal, handleStopPropagation },
  } = useModalInfoConditions();

  return (
    <>
      {isOpenModal && (
        <Container onClick={handleCloseModal}>
          <Modal onClick={handleStopPropagation}>
            <ModalContentRow borderBotton paddingBottom={10}>
              <ModalText role="content">Fracciona tu pago</ModalText>
              <ModalText role="content">SeQura</ModalText>
            </ModalContentRow>
            <ModalContentArea>
              <ModalContentRow marginBottom={30}>
                <ModalText role="content">
                  1. Eliges "Fracciona tu pago" al realizar tu pedido y pagas solo la primera cuota
                </ModalText>
                <ModalText role="icon">Icon</ModalText>
              </ModalContentRow>
              <ModalContentRow marginBottom={30}>
                <ModalText role="content">2. Recibes tu pedido</ModalText>
                <ModalText role="icon">Icon</ModalText>
              </ModalContentRow>
              <ModalContentRow marginBottom={50}>
                <ModalText role="content">
                  3. El resto de pagos se cargarán automaticamente a tu tarjeta.
                </ModalText>
                <ModalText role="icon">Icon</ModalText>
              </ModalContentRow>
              <ModalContentRow marginBottom={10}>
                <ModalText bold role="content">
                  ¡Así de simple!
                </ModalText>
              </ModalContentRow>
              <ModalContentRow>
                <ModalText role="content" data-testid="payment-conditions">
                  {`Ademas en el importe mostrado ya se incluye la cuota única mensual de ${activePaymentMethod?.instalment_fee.string}, por lo que
                  no tendrás ninguna sorpresa.`}
                </ModalText>
              </ModalContentRow>
            </ModalContentArea>
          </Modal>
        </Container>
      )}
    </>
  );
};
