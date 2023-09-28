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
import {Farm, Field, Machinery} from '../../types/types';
import {PickerCard} from './PickerCard/PickerCard';

export type PickerDataTypes = Farm | Field | Machinery;

interface Props extends TouchableOpacityProps {
  label: string;
  data: Farm[] | Field[] | Machinery[] | undefined;
  onSelect: (item: Farm | Field | Machinery | null) => void;
}

export function Picker({
  label = '',
  data,
  onSelect,
  ...touchableOpacityProps
}: Props) {
  const [selectedItem, setSelectedItem] = useState<
    Farm | Machinery | Field | null
  >(null);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function handleModalShow() {
    setModalIsVisible(isVisible => !isVisible);
  }

  function handleSelectedItem(item: Farm | Machinery | Field) {
    setSelectedItem(item);
    onSelect(item);

    handleModalShow();
  }

  return (
    <PickerContainer {...touchableOpacityProps} onPress={handleModalShow}>
      <PickerLabel>{label}</PickerLabel>
      <InformationWrapper>
        <InformationContainer>
          <PickerName>{selectedItem?.name}</PickerName>
          {selectedItem && 'serialNumber' in selectedItem && (
            <PickerSerialNumber>{selectedItem.serialNumber}</PickerSerialNumber>
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
                selectedReason={selectedItem}
                onPress={() => handleSelectedItem(item)}
              />
            )}
          />
        </ModalContainer>
      </Modal>
    </PickerContainer>
  );
}
