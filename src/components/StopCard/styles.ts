import styled from 'styled-components/native';

export const StopCardContainer = styled.View`
  flex-direction: row;
  align-items: center;

  background-color: ${props => props.theme.colors.white};

  border-bottom-width: 0.5px;
  border-bottom-color: ${props => props.theme.colors.gray300};

  padding-top: 4px;
  padding-bottom: 4px;
`;

export const StopCardInformation = styled.View`
  flex: 1;
`;

export const StopCardInformationRow = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const StopCardFarmTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;

  color: ${props => props.theme.colors.black};
`;

export const StopCardReasonTitle = styled.Text`
  font-size: 14px;
`;

export const StopCardDate = styled.Text`
  font-size: 12px;
`;

export const IconWrapper = styled.View`
  margin-right: 16px;
`;
