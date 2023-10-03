import styled from 'styled-components/native';

export const PickerCardContainer = styled.TouchableOpacity`
  padding-top: 16px;
  padding-bottom: 16px;

  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.gray300};
`;

export const PickerCardTitle = styled.Text`
  color: black;
  font-size: 16px;

  padding-left: 24px;
`;
