import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SwitchNavigator } from './navigation/SwitchNavigator';

import * as firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

function App() {
  return (
    <NavigationContainer>
      <SwitchNavigator />
    </NavigationContainer>
  );
}

export default App;