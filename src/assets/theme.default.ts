import {css} from '@Tools'

import {ThemeType} from './theme.types'

export const theme: ThemeType = {
  color: {
   gray900: '#2e2e2e',
   white: '#ffffff',

  },
  font: {
    pBig: css``,
    pMed: css``,
    pSmall: css`
      font-family: Roboto;
      color: #2e2e2e;
      font-size: 14px;
      line-height: 18px;
      `,
    pXSmall: css``,
    },
  effects: {
    fakeLink: css`
     color: #428bca;
      text-decoration: underline solid #428bca;
      cursor: pointer;
  `,
  },
  elevation: {
   
  },
};

