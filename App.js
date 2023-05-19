import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './components/AuthScreen';
import RegScreen from './components/RegistrationScreen'; 
import Product from './components/Product';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import About from './components/About';
import GenHealthStat from './components/GenHealthStat';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AuthScreen" screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
          <Stack.Screen name="RegScreen" component={RegScreen} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen name="Privacy" component={Privacy} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="HealthStat" component={GenHealthStat} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
