import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {ResourcesType} from '../types/types';

type ResourceStore = {
  resources: ResourcesType | null;
  updateResources: (data: ResourcesType) => void;
};

export const useResourceStore = create<ResourceStore>()(
  persist(
    set => ({
      resources: null,
      updateResources: data => set({resources: data}),
    }),
    {
      name: 'resourceStorage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
