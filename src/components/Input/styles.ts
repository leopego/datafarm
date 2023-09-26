import styled from 'styled-components/native';

export const InputContainer = styled.View``;

export const InputLabel = styled.Text`
  color: ${props => props.theme.colors.green100};

  font-size: 14px;
  font-weight: bold;
`;

export const TextInputContainer = styled.TextInput`
  border-bottom-width: 1.5px;
  border-bottom-color: ${props => props.theme.colors.gray100};
`;
