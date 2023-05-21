import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function MyAccount() {
  const navigation = useNavigation();
  const route = useRoute();

  const username = route.params ? route.params.username : 'Unknown User';

  const handleLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => navigation.navigate('AuthScreen') }
      ]
    );
  };

  const handleDataSellTransactions = () => {
    Alert.alert(
      "Under Development",
      "This feature is currently under development. Please check back later.",
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { width: SCREEN_WIDTH }]}>
        <TouchableOpacity onPress={() => navigation.navigate('AccountSettings')}>
          <MaterialIcons name="arrow-back" size={40} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>My Account</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AccountSettings')}>
          <Ionicons name="settings" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="account-circle" size={24} color="black" />
          <Text style={styles.input}>{username}</Text>
        </View>

        <Text style={styles.subtitle}>Transaction list</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <MaterialIcons name="pending-actions" size={20} color="black" />
            <Text>Awaiting Payments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <MaterialIcons name="autorenew" size={20} color="black" />
            <Text>Transaction in Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <MaterialIcons name="list" size={20} color="black" />
            <Text>All transactions</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('DataForSaleOverview')}>
          <Text>My Data for Sale</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleDataSellTransactions}>
          <Text>Data Sell Transactions</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Contact')}>
          <Text>Contact Support</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutContainer} onPress={handleLogout}>
        <MaterialIcons name="logout" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'gray',
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 30,
  },
  title: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    flex: 1, 
  },
  content: {
    padding: 15,
    marginTop: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    marginLeft: 10,
    fontSize: 18,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    marginRight: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  logoutContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    paddingBottom: 20,
    paddingRight: 10,
  },
});
