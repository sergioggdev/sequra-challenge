// Globals
import { styled } from '@Tools';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #2e2e2e;
  margin: 10px 0px;
  padding: 12px;
`;

export const InformationArea = styled.div`
  margin: 0px;
  padding: 0px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoSelectTitle = styled.p`
  margin: 0px;
  padding: 0px;
  ${props => props.theme.font.pSmall}
`;

export const MoreInfoText = styled.a`
  margin: 0px;
  padding: 0px;
  ${props => props.theme.font.pSmall}
  ${props => props.theme.effects.fakeLink}
`;

export const SelectArea = styled.div`
  margin: 0px;
  padding: 0px;
`;

export const PaymentTypeSelect = styled.select`
  margin: 0px;
  padding: 2px;
  width: 100%;
`;
export const PaymentTypeOption = styled.option`
  margin: 0px;
  padding: 0px;
`;
