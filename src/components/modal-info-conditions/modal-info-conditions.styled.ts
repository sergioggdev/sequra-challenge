import { styled, css } from '@Tools';

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Modal = styled.div`
  margin: 0;
  position: absolute;
  min-width: 250px;
  max-width: 350px;
  padding: 12px 0px;
  border: 1px solid ${props => props.theme.color.gray900};
  background-color: ${props => props.theme.color.white};
`;

export const ModalText = styled.p<{ bold?: boolean }>`
  ${props => props.theme.font.pMed}
  font-weight: ${props => (props.bold ? 'bold' : 'regular')};
  margin: 0;
  padding: 0;
`;

export const ModalContentArea = styled.div`
  margin: 0;
  padding: 18px 0px 5px 8px;
`;

export const ModalContentRow = styled.div<{
  borderBotton?: boolean;
  marginBottom?: number;
  paddingBottom?: number;
}>`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 12px;
  padding-bottom: ${props => `${props.paddingBottom}px`};
  margin-bottom: ${props => `${props.marginBottom}px`};
  ${props =>
    props.borderBotton &&
    css`
      border-bottom: 1px solid ${props => props.theme.color.gray900};
    `}
`;
