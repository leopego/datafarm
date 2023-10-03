import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

type userStore = {
  tokenAuthorization: string | null;
  updateToken: (token: string) => void;
};

export const useUserStore = create<userStore>()(
  persist(
    set => ({
      tokenAuthorization: null,
      updateToken: token => {
        set({
          tokenAuthorization: token,
        });
      },
    }),
    {
      name: 'userStorage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
