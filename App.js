import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './components/Auth';
import UserRegister from './components/UserRegister'; 
import CompanyRegister from './components/CompanyRegister';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="UserRegister" component={UserRegister} />
          <Stack.Screen name="CompanyRegister" component={CompanyRegister} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
