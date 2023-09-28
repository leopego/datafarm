import React from 'react';
import {ButtonContainer, ButtonText} from './styles';
import {TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
  disabled: boolean;
}

export function Button({title, disabled, ...touchableOpacityProps}: Props) {
  return (
    <ButtonContainer disabled={disabled} {...touchableOpacityProps}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
