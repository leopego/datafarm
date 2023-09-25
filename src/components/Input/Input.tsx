import React from 'react';
import {TextInputProps, ViewProps} from 'react-native';
import {InputContainer, InputLabel, TextInputContainer} from './styles';

interface Props extends TextInputProps {
  containerProps?: ContainerProps;
  label?: string;
}

interface ContainerProps extends ViewProps {}

export function Input({label, containerProps, ...textInputProps}: Props) {
  return (
    <InputContainer {...containerProps}>
      <InputLabel>{label}</InputLabel>
      <TextInputContainer {...textInputProps} />
    </InputContainer>
  );
}
