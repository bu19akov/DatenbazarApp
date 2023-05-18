import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './components/AuthScreen';
import RegScreen from './components/RegistrationScreen'; 
import DataForSaleOverview from './components/DataForSaleOverview';
import DataForSale from './components/DataForSale';
import DataForSaleList from './components/DataForSaleList';
import AccountSettings from './components/AccountSettings';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AuthScreen" screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
          <Stack.Screen name="RegScreen" component={RegScreen} />
          <Stack.Screen name="DataForSaleOverview" component={DataForSaleOverview} options={{ title: "Data for Sale" }} />
          <Stack.Screen name="DataForSaleList" component={DataForSaleList} options={{ title: "Data for Sale" }} />
          <Stack.Screen name="AccountSettings" component={AccountSettings} options={{ title: "Account Settings" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
