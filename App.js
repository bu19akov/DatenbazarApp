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

import Product from './components/Product';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import About from './components/About';
import GenHealthStat from './components/GenHealthStat';

import MyAccount from './components/MyAccount';
import SuccessfullMessage from './components/SuccessfullMessage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AuthScreen" screenOptions={{headerShown: false}}>
           {/* Vladimir */}
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
          <Stack.Screen name="RegScreen" component={RegScreen} />
          {/* Carl */}
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen name="Privacy" component={Privacy} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="HealthStat" component={GenHealthStat} />
          {/* Nadia */}
          <Stack.Screen name="MyAccount" component={MyAccount} options={{ title: 'My Account' }} />  
          <Stack.Screen name="SuccessfullMessage" component={SuccessfullMessage} />
           {/* Yehor */}
          <Stack.Screen name="DataForSaleOverview" component={DataForSaleOverview} options={{ title: "Data for Sale" }} />
          <Stack.Screen name="DataForSaleList" component={DataForSaleList} options={{ title: "Data for Sale" }} />
          <Stack.Screen name="AccountSettings" component={AccountSettings} options={{ title: "Account Settings" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
