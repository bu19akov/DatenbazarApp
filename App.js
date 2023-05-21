import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './components/Vladimir/AuthScreen';
import RegScreen from './components/Vladimir/RegistrationScreen'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from './components/Vladimir/AuthContext';

import DataForSaleOverview from './components/Yehor/DataForSaleOverview';
import DataForSale from './components/Yehor/DataForSale';
import DataForSaleList from './components/Yehor/DataForSaleList';
import AccountSettings from './components/Yehor/AccountSettings';
import DataForSaleQuestionnaire from './components/Yehor/DataForSaleQuestionnaire';

import Product from './components/Carl/Product';
import Contact from './components/Carl/Contact';
import Privacy from './components/Carl/Privacy';
import About from './components/Carl/About';
import GenHealthStat from './components/Carl/GenHealthStat';

import MyAccount from './components/Nadia/MyAccount';
import SuccessfullMessage from './components/Nadia/SuccessfullMessage';

enableScreens();

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
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
            <Stack.Screen name="DataForSaleQuestionnaire" component={DataForSaleQuestionnaire} options={{ title: "Questionnaire" }} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
    </AuthProvider>
  );
}
