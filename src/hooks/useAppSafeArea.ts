import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function useAppSafeArea() {
  const {top} = useSafeAreaInsets();

  return {
    top: Math.max(top, 20),
  };
}
