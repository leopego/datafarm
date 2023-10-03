import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  padding: 12px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;

  background-color: ${props =>
    props.disabled ? props.theme.colors.green100 : props.theme.colors.green};
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  font-weight: bold;
`;

export const LoadingContainer = styled.ActivityIndicator``;
