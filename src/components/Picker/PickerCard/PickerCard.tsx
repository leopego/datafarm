import React from 'react';
import {PickerCardContainer, PickerCardTitle} from './styles';
import {PickerDataTypes} from '../Picker';

interface PickerCardProps {
  name: string;
  selectedReason: PickerDataTypes | null;
  onPress: () => void;
}

export function PickerCard({name, onPress, selectedReason}: PickerCardProps) {
  return (
    <PickerCardContainer
      onPress={onPress}
      style={{
        backgroundColor: name === selectedReason?.name ? '#e9f1e8' : 'white',
      }}>
      <PickerCardTitle>{name}</PickerCardTitle>
    </PickerCardContainer>
  );
}
