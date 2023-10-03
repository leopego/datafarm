import React from 'react';
import {ButtonContainer, ButtonText, LoadingContainer} from './styles';
import {TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components';

interface Props extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({
  title,
  disabled = false,
  loading = false,
  ...touchableOpacityProps
}: Props) {
  const theme = useTheme();

  return (
    <ButtonContainer disabled={disabled || loading} {...touchableOpacityProps}>
      {loading ? (
        <LoadingContainer color={theme.colors.white} />
      ) : (
        <ButtonText>{title}</ButtonText>
      )}
    </ButtonContainer>
  );
}
