import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {AppTabBottomTabParamList} from './AppTabNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppTabBottomTabParamList {}
  }
}

export type AppTabScreenProps<
  RouteName extends keyof AppTabBottomTabParamList,
> = BottomTabScreenProps<AppTabBottomTabParamList, RouteName>;
