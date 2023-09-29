import React from 'react';
import {PickerCardContainer, PickerCardTitle} from './styles';
import {PickerDataTypes} from '../Picker';

interface PickerCardProps {
  name: string;
  selected: PickerDataTypes | null;
  onPress: () => void;
}

export function PickerCard({name, onPress, selected}: PickerCardProps) {
  return (
    <PickerCardContainer
      onPress={onPress}
      style={{
        backgroundColor: name === selected?.name ? '#e9f1e8' : 'white',
      }}>
      <PickerCardTitle>{name}</PickerCardTitle>
    </PickerCardContainer>
  );
}
