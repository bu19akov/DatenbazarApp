import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './components/AuthScreen';
import RegScreen from './components/RegistrationScreen'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AuthScreen" screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
          <Stack.Screen name="RegScreen" component={RegScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
