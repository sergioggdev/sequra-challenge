// Libraries
import React from 'react';

// Globals

// Locals
import {
  Container,
  InformationArea,
  InfoSelectTitle,
  MoreInfoText,
  SelectArea,
  PaymentTypeSelect,
  PaymentTypeOption,
} from './product-payment-section.styled';
import { Props } from './product-payment-section.types';
import useProductPaymentSection from './product-payment-section.hook';

/** Component to show Select with diferent payments type */
export const ProductPaymentSection = ({}: Props) => {
  const {
    // t,
    state: { optionValue, paymentMethods },
    actions: { setOptionValue, handleClickMoreInfo },
  } = useProductPaymentSection();

  return (
    <>
      {!!paymentMethods.length && (
        <Container>
          <InformationArea>
            <InfoSelectTitle role="content">Págalo en</InfoSelectTitle>
            <MoreInfoText onClick={handleClickMoreInfo} role="content">
              más info
            </MoreInfoText>
          </InformationArea>
          <SelectArea>
            <PaymentTypeSelect value={optionValue} onChange={setOptionValue} defaultValue={0}>
              <PaymentTypeOption disabled value={0}>
                Selecciona un metod de pago
              </PaymentTypeOption>
              {paymentMethods.map(({ instalment_count, instalment_amount }) => {
                return (
                  <PaymentTypeOption
                    data-testid="payment-method"
                    key={instalment_count}
                    value={instalment_count}>
                    {`${instalment_count} cuotas de ${instalment_amount.string}/mes`}
                  </PaymentTypeOption>
                );
              })}
            </PaymentTypeSelect>
          </SelectArea>
        </Container>
      )}
    </>
  );
};
