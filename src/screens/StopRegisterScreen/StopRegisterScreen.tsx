import React, {useEffect, useState} from 'react';
import {
  NoteInput,
  NoteTitle,
  NoteWrapper,
  RowView,
  TempContainer,
} from './styles';
import {Picker} from '../../components/Picker/Picker';

import {StopReasonList} from '../../components/StopReasonList/StopReasonList';
import {Button} from '../../components/Button/Button';
import {EditIcon} from '../../assets/icons/EditIcon';
import {Farm, Field, Machinery, Reason} from '../../types/types';
import {useResources} from '../../domain/useResources/useResources';
import {AppTabScreenProps} from '../../routes/navigationType';

type Props = AppTabScreenProps<'StopRegisterScreen'>;

export function StopRegisterScreen({}: Props) {
  const [machinerySelected, setMachinerySelected] = useState<Machinery | null>(
    null,
  );
  const [farmSelected, setFarmSelected] = useState<Farm | null>(null);
  const [fieldSelected, setFieldSelected] = useState<Field | null>(null);

  const [selectedReason, setSelectedReason] = useState<Reason | null>(null);
  const [note, setNote] = useState<string>('');

  const {data} = useResources();

  function handleSaveStop() {
    const registerStop = {
      machinery: machinerySelected,
      farm: {
        id: farmSelected?.id,
        name: farmSelected?.name,
      },
      field: fieldSelected,
      reason: {
        id: selectedReason?.id,
        name: selectedReason?.name,
      },
      note: note,
    };

    console.log(registerStop);
  }

  useEffect(() => {
    setFieldSelected(null);
  }, [farmSelected]);

  return (
    <TempContainer>
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

      <StopReasonList
        data={data?.reasons}
        selectedReason={selectedReason}
        setSelectedReason={setSelectedReason}
      />

      <NoteWrapper>
        <EditIcon />
        <NoteTitle>Nota da Parada</NoteTitle>
      </NoteWrapper>
      <NoteInput multiline onChangeText={setNote} />

      <Button
        title="SALVAR"
        style={{marginBottom: 36, marginTop: 12}}
        onPress={handleSaveStop}
        disabled={
          farmSelected == null ||
          machinerySelected == null ||
          fieldSelected == null ||
          selectedReason == null
            ? true
            : false
        }
      />
    </TempContainer>
  );
}
