import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EnterScreen from '../screens/EnterScreen';
import LogScreen from '../screens/LogScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Enter" component={EnterScreen}/>
        <Stack.Screen name="Log" component={LogScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
  );
}

export default StackNavigator;