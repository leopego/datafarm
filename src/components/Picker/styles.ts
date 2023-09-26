import styled from 'styled-components/native';

export const PickerContainer = styled.TouchableOpacity`
  border-bottom-width: 1.5px;
  border-bottom-color: ${props => props.theme.colors.gray100};

  padding-bottom: 8px;
`;

export const PickerLabel = styled.Text`
  color: ${props => props.theme.colors.green100};

  font-size: 14px;
  font-weight: bold;

  margin-bottom: 8px;
`;

export const PickerName = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.gray300};
  font-weight: 500;
`;

export const PickerSerialNumber = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.colors.gray400};
`;

export const InformationWrapper = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const InformationContainer = styled.View`
  margin-right: 12px;
`;
