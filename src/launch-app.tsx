import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { theme } from '@Assets';
import { Provider } from '@Models/provider';
import { ProductPaymentSection, ModalInfoConditions } from '@Components';

// ? Create Global namespace to execute Sequra logic from shopper
window.Sequra = {};

const root = createRoot(document.getElementById('sequra-product-conditions-info') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider>
        <ProductPaymentSection />
        <ModalInfoConditions />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
