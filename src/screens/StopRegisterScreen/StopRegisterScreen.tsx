import React, {useEffect, useState} from 'react';
import {
  FooterContainer,
  NoteInput,
  NoteTitle,
  NoteWrapper,
  RowView,
} from './styles';
import {Picker} from '../../components/Picker/Picker';

import uuid from 'react-native-uuid';

import {StopReasonList} from '../../components/StopReasonList/StopReasonList';
import {Button} from '../../components/Button/Button';
import {EditIcon} from '../../assets/icons/EditIcon';
import {
  FarmType,
  FieldType,
  MachineryType,
  ReasonType,
} from '../../types/types';
import {useResources} from '../../domain/useResources/useResources';
import {AppTabScreenProps} from '../../routes/navigationType';
import {useStopStore} from '../../store/stopStore';
import {Screen} from '../../components/Screen/Screen';
import {Timer} from '../../components/Timer/Timer';
import GetLocation from 'react-native-get-location';
import {Alert} from 'react-native';

type Props = AppTabScreenProps<'StopRegisterScreen'>;

export function StopRegisterScreen({}: Props) {
  const [machinerySelected, setMachinerySelected] =
    useState<MachineryType | null>(null);
  const [farmSelected, setFarmSelected] = useState<FarmType | null>(null);
  const [fieldSelected, setFieldSelected] = useState<FieldType | null>(null);

  const [selectedReason, setSelectedReason] = useState<ReasonType | null>(null);
  const [note, setNote] = useState<string>('');

  const [minutes, setMinutes] = useState<number>(1);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {data} = useResources();

  const addStop = useStopStore(state => state.addStop);

  function handleSaveStop() {
    setIsLoading(true);

    handleCurrentLocation();

    const newStop = {
      id: uuid.v4(),
      machinery: machinerySelected,
      farm: farmSelected,
      field: fieldSelected,
      reason: selectedReason,
      note: note,
      minutes: minutes,
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
      synced: false,
      errorOnSync: false,
    };

    addStop(newStop);
    clearStop();
    setIsLoading(false);

    Alert.alert('', 'Parada registrada com sucesso.');
  }

  function handleCurrentLocation() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 6000,
    })
      .then(location => {
        setCurrentLocation({
          latitude: location.latitude,
          longitude: location.longitude,
        });
      })
      .catch(error => {
        console.log('error localização', error);
      });
  }

  function clearStop() {
    setMachinerySelected(null);
    setFarmSelected(null);
    setSelectedReason(null);
    setNote('');
    setMinutes(1);
  }

  useEffect(() => {
    setFieldSelected(null);
  }, [farmSelected]);

  useEffect(() => {
    handleCurrentLocation();
  }, []);

  return (
    <>
      <Screen scrollable>
        <Picker
          label="Equipamento"
          data={data?.machineries}
          onSelect={setMachinerySelected}
          selected={machinerySelected}
        />

        <RowView>
          <Picker
            label="Fazenda"
            data={data?.farms}
            style={{flexGrow: 1, marginRight: 12}}
            selected={farmSelected}
            onSelect={setFarmSelected}
          />

          {farmSelected && (
            <Picker
              label="Talhão"
              data={farmSelected.fields}
              onSelect={setFieldSelected}
              selected={fieldSelected}
            />
          )}
        </RowView>

        {data?.reasons && (
          <StopReasonList
            data={data.reasons}
            selectedReason={selectedReason}
            setSelectedReason={setSelectedReason}
          />
        )}

        <NoteWrapper>
          <EditIcon />
          <NoteTitle>Nota da Parada</NoteTitle>
        </NoteWrapper>
        <NoteInput
          multiline
          onChangeText={setNote}
          style={{marginBottom: 32}}
        />
      </Screen>
      <FooterContainer>
        <Timer minutes={minutes} setMinutes={setMinutes} />
        <Button
          style={{marginLeft: 12}}
          title="SALVAR"
          onPress={handleSaveStop}
          loading={isLoading}
          disabled={
            farmSelected == null ||
            machinerySelected == null ||
            fieldSelected == null ||
            selectedReason == null
              ? true
              : false
          }
        />
      </FooterContainer>
    </>
  );
}
