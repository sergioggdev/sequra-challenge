import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { theme } from '@Assets';

export const {
  default: styled,
  css,
  withTheme,
} = styledComponents as ThemedStyledComponentsModule<typeof theme>;
