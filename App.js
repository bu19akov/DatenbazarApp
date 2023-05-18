import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './components/AuthScreen';
import RegScreen from './components/RegistrationScreen'; 
import MyAccount from './components/MyAccount';
import SuccessfullMessage from './components/SuccessfullMessage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SuccessfullMessage" screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
          <Stack.Screen name="RegScreen" component={RegScreen} />
          <Stack.Screen name="MyAccount" component={MyAccount} options={{ title: 'My Account' }} />  
          <Stack.Screen name="SuccessfullMessage" component={SuccessfullMessage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
