import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppTabBottomTabNavigator} from './AppTabNavigator';
import {AuthNavigator} from './AuthNavigator';
import {useUserStore} from '../store/userStore';

export function Routes() {
  const tokenAuthorization = useUserStore(state => state.tokenAuthorization);

  return (
    <NavigationContainer>
      {tokenAuthorization ? <AppTabBottomTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
