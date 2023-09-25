import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.green};

  justify-content: center;
  align-items: center;

  padding: 12px;

  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  font-weight: bold;
`;
