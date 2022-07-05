import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { render, screen, fireEvent, within } from '@testing-library/react';

import { theme } from '@Assets';
import { Provider } from '@Models/provider';

import { ModalInfoConditions } from './modal-info-conditions';

describe('ModalInfoConditions Component', () => {
  beforeEach(() => {});

  test('check to contain basic text content', () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider
          mockProps={{
            payments: { isOpenModal: true, paymentMethods: [] },
          }}>
          <ModalInfoConditions />
        </Provider>
      </ThemeProvider>,
    );

    expect(screen.getAllByRole('content')).toHaveLength(7);
    expect(screen.getAllByRole('icon')).toHaveLength(3);
  });

  test('check to contain instalment_fee text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider
          mockProps={{
            payments: {
              isOpenModal: true,
              paymentMethods: [],
              // @ts-ignore
              activePaymentMethod: { instalment_fee: { string: 'ola que ases', value: 0 } },
            },
          }}>
          <ModalInfoConditions />
        </Provider>
      </ThemeProvider>,
    );

    expect(screen.getByTestId('payment-conditions')).toHaveTextContent('ola que ases');
  });
});
