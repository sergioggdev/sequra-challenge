declare module '*.jpg';
declare module '*.png';
declare module '*.gif';

declare global {
  interface Window {
    Sequra: {
      getPaymentConditions?: (price: number) => void;
    };
  }
}

export {};
