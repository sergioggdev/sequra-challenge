import {FlattenSimpleInterpolation} from 'styled-components'

export type ThemeType = {
    color: {
        gray900: '#2e2e2e',
        white: '#ffffff',
       },
       font: {
         pBig: FlattenSimpleInterpolation,
         pMed: FlattenSimpleInterpolation,
         pSmall: FlattenSimpleInterpolation,
         pXSmall: FlattenSimpleInterpolation,
         },
       effects: {
         fakeLink: FlattenSimpleInterpolation,
       },
       elevation: {
       },
}
