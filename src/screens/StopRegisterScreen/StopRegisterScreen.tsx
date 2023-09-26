import React from 'react';
import {RowView, TempContainer} from './styles';
import {Picker} from '../../components/Picker/Picker';

export function StopRegisterScreen() {
  return (
    <TempContainer>
      <Picker
        label="Equipamento"
        name="TR 6170J"
        serialNumber="KO321M312MOE2M1O"
      />

      <RowView>
        <Picker
          label="Fazenda"
          name="Fazenda Modelo"
          style={{flexGrow: 1, marginRight: 12}}
        />
        <Picker label="Talhão" name="TH 01" />
      </RowView>
    </TempContainer>
  );
}
