import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {StopType} from '../types/types';
import {api} from '../domain/api';
import {useUserStore} from './userStore';

type StopStore = {
  stops: StopType[];
  isSyncing: boolean;
  addStop: (data: StopType) => void;
  syncAllStops: () => void;
};

export const useStopStore = create<StopStore>()(
  persist(
    set => ({
      isSyncing: false,
      stops: [],
      addStop: newStop => {
        set(prevState => ({
          stops: [...prevState.stops, newStop],
        }));
      },
      syncAllStops: async () => {
        set({
          isSyncing: true,
        });

        const stopsToSync = useStopStore
          .getState()
          .stops.filter(stop => !stop.synced || stop.errorOnSync);

        for (const stop of stopsToSync) {
          const formatToRequest = {
            uuid: stop.id,
            note: stop.note,
            idFarm: stop.farm.id,
            idField: stop.field.id,
            idReason: stop.reason.id,
            idMachinery: stop.machinery.id,
            minutes: stop.minutes,
            longitude: stop.longitude,
            latitude: stop.latitude,
          };

          try {
            const response = await api.post(
              'mobile/machine/stop-register/registry',
              formatToRequest,
              {
                headers: {
                  'Content-Type': 'application/json',
                  TokenAuthorization:
                    useUserStore.getState().tokenAuthorization,
                },
              },
            );

            if (response.data.data.status === 'SYNCRONIZED_SUCCESS') {
              set(prevState => ({
                stops: prevState.stops.map(prevStop =>
                  prevStop.id === stop.id
                    ? {...prevStop, synced: true, errorOnSync: false}
                    : prevStop,
                ),
              }));
            } else {
              set(prevState => ({
                stops: prevState.stops.map(prevStop =>
                  prevStop.id === stop.id
                    ? {...prevStop, errorOnSync: true}
                    : prevStop,
                ),
              }));
            }
          } catch (error) {
            set(prevState => ({
              stops: prevState.stops.map(prevStop =>
                prevStop.id === stop.id
                  ? {...prevStop, errorOnSync: true}
                  : prevStop,
              ),
            }));
          }
        }

        set({
          isSyncing: false,
        });
      },
    }),
    {
      name: 'stopsHistoryStorage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
