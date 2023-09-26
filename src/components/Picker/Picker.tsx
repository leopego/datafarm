import React from 'react';
import {
  PickerContainer,
  PickerSerialNumber,
  PickerLabel,
  InformationWrapper,
  InformationContainer,
  PickerName,
} from './styles';
import {TouchableOpacityProps} from 'react-native';
import {ChevronIcon} from '../../assets/icons/ChevronIcon';

interface Props extends TouchableOpacityProps {
  label?: string;
  name?: string;
  serialNumber?: string;
}

export function Picker({
  label = '',
  name,
  serialNumber,
  ...touchableOpacityProps
}: Props) {
  return (
    <PickerContainer {...touchableOpacityProps}>
      <PickerLabel>{label}</PickerLabel>
      <InformationWrapper>
        <InformationContainer>
          <PickerName>{name}</PickerName>
          {serialNumber && (
            <PickerSerialNumber>{serialNumber}</PickerSerialNumber>
          )}
        </InformationContainer>
        <ChevronIcon />
      </InformationWrapper>
    </PickerContainer>
  );
}
