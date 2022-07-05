import { useContext } from 'react';
import { Context } from '@Models/provider';
import { ThemeContext } from 'styled-components';

export const usePayments = () => useContext(Context).payments;
export const useTheme = () => useContext(ThemeContext);
export { useTranslation } from 'react-i18next';
