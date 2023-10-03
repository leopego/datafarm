import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {AuthScreen} from '../screens/AuthScreen/AuthScreen';

export type AuthNavigatorParamList = {
  AuthScreen: undefined;
};

const Stack = createStackNavigator<AuthNavigatorParamList>();

export function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
    </Stack.Navigator>
  );
}
