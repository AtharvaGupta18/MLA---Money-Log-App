import * as React from 'react';
import { createSwitchNavigator } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import LoginScreen from '../screens/LoginScreen';

const Switch = createSwitchNavigator();

export default function SwitchNavigator() {
  return (
      <Switch.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Switch.Screen name="Login" component={LoginScreen}/>
        <Switch.Screen name="navigator" component={StackNavigator}/>
      </Switch.Navigator>
  );
}