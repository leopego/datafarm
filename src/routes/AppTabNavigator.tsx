import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StopRegisterScreen} from '../screens/StopRegisterScreen/StopRegisterScreen';
import {StopHistoryScreen} from '../screens/StopHistoryScreen/StopHistoryScreen';

export type AppTabBottomTabParamList = {
  StopRegisterScreen: undefined;
  StopHistoryScreen: undefined;
};

const BottomTab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabBottomTabNavigator() {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        name="StopRegisterScreen"
        component={StopRegisterScreen}
      />
      <BottomTab.Screen
        name="StopHistoryScreen"
        component={StopHistoryScreen}
      />
    </BottomTab.Navigator>
  );
}
