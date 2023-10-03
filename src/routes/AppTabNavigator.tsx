import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StopRegisterScreen} from '../screens/StopRegisterScreen/StopRegisterScreen';
import {StopHistoryScreen} from '../screens/StopHistoryScreen/StopHistoryScreen';
import {ListIcon} from '../assets/icons/ListIcon';
import {ClockIcon} from '../assets/icons/ClockIcon';

export type AppTabBottomTabParamList = {
  StopRegisterScreen: undefined;
  StopHistoryScreen: undefined;
};

const BottomTab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabBottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <BottomTab.Screen
        name="StopRegisterScreen"
        component={StopRegisterScreen}
        options={{tabBarIcon: ClockIcon}}
      />
      <BottomTab.Screen
        name="StopHistoryScreen"
        component={StopHistoryScreen}
        options={{tabBarIcon: ListIcon}}
      />
    </BottomTab.Navigator>
  );
}
