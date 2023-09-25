import React from 'react';
import {ButtonContainer, ButtonText} from './styles';
import {TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...touchableOpacityProps}: Props) {
  return (
    <ButtonContainer {...touchableOpacityProps}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
