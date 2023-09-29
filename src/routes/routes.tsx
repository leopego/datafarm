import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppTabBottomTabNavigator} from './AppTabNavigator';

export function Routes() {
  return (
    <NavigationContainer>
      <AppTabBottomTabNavigator />
    </NavigationContainer>
  );
}
