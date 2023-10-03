import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {AppTabBottomTabParamList} from './AppTabNavigator';
import {AuthNavigatorParamList} from './AuthNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AppTabBottomTabParamList,
        AuthNavigatorParamList {}
  }
}

export type AppTabScreenProps<
  RouteName extends keyof AppTabBottomTabParamList,
> = BottomTabScreenProps<AppTabBottomTabParamList, RouteName>;
