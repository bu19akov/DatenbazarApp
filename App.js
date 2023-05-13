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
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={Auth} options={{ title: 'Login' }} />
          <Stack.Screen name="UserRegister" component={UserRegister} options={{ title: 'User Registration' }} />
          <Stack.Screen name="CompanyRegister" component={CompanyRegister} options={{ title: 'Company Registration' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
