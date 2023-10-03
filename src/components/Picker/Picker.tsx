import React, {useState} from 'react';
import {
  PickerContainer,
  PickerSerialNumber,
  PickerLabel,
  InformationWrapper,
  InformationContainer,
  PickerName,
  ModalFakeBlur,
  ModalContainer,
  ModalHeader,
  ModalHeaderLabel,
} from './styles';
import {FlatList, Modal, Pressable, TouchableOpacityProps} from 'react-native';
import {ChevronIcon} from '../../assets/icons/ChevronIcon';
import {CloseIcon} from '../../assets/icons/CloseIcon';
import {FarmType, FieldType, MachineryType} from '../../types/types';
import {PickerCard} from './PickerCard/PickerCard';

export type PickerDataTypes = FarmType | FieldType | MachineryType;

interface Props extends TouchableOpacityProps {
  label: string;
  data: FarmType[] | FieldType[] | MachineryType[] | undefined;
  selected: PickerDataTypes | null;
  onSelect: (item: FarmType | FieldType | MachineryType | null) => void;
}

export function Picker({
  label = '',
  data,
  selected,
  onSelect,
  ...touchableOpacityProps
}: Props) {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function handleModalShow() {
    setModalIsVisible(isVisible => !isVisible);
  }

  function handleSelectedItem(item: FarmType | MachineryType | FieldType) {
    onSelect(item);
    handleModalShow();
  }

  return (
    <PickerContainer {...touchableOpacityProps} onPress={handleModalShow}>
      <PickerLabel>{label}</PickerLabel>
      <InformationWrapper>
        <InformationContainer>
          <PickerName>{selected?.name}</PickerName>
          {selected && 'serialNumber' in selected && (
            <PickerSerialNumber>{selected?.serialNumber}</PickerSerialNumber>
          )}
        </InformationContainer>
        <ChevronIcon />
      </InformationWrapper>

      <Modal animationType="slide" transparent={true} visible={modalIsVisible}>
        <ModalFakeBlur />
        <ModalContainer>
          <ModalHeader>
            <ModalHeaderLabel>{label}</ModalHeaderLabel>
            <Pressable onPress={handleModalShow}>
              <CloseIcon />
            </Pressable>
          </ModalHeader>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <PickerCard
                name={item.name}
                selected={selected}
                onPress={() => handleSelectedItem(item)}
              />
            )}
          />
        </ModalContainer>
      </Modal>
    </PickerContainer>
  );
}
