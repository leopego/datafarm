import React from 'react';

import {StopCard} from '../../components/StopCard/StopCard';
import {FlatList} from 'react-native';
import {useStopStore} from '../../store/stopStore';
import {Screen} from '../../components/Screen/Screen';
import {Button} from '../../components/Button/Button';
import {ButtonWrapper} from './styles';

export function StopHistoryScreen() {
  const stopStore = useStopStore();

  return (
    <Screen>
      <FlatList
        data={stopStore.stops}
        renderItem={({item}) => <StopCard data={item} key={item.id} />}
        style={{marginBottom: 12}}
      />
      <ButtonWrapper>
        <Button
          title="SINCRONIZAR"
          onPress={stopStore.syncAllStops}
          disabled={stopStore.isSyncing}
          loading={stopStore.isSyncing}
        />
      </ButtonWrapper>
    </Screen>
  );
}
