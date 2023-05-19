import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MyAccount() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>My Account</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AccountSettings')}>
                <MaterialIcons name="settings" size={24} color="black" />
            </TouchableOpacity>
        </View>
      
      <View style={styles.inputContainer}>
        <MaterialIcons name="account-circle" size={24} color="black" />
        <TextInput 
          placeholder="User Name"
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.option}>
        <MaterialIcons name="verified-user" size={24} color="black" />
        <Text>Verified Profile</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      
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

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('DataForSale')}>
        <Text>My Data for Sale</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('DataSellTransactions')}>
        <Text>Data Sell Transactions</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Contact')}>
        <Text>Contact Support</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    paddingLeft: 15,
    backgroundColor: '#E0E0E0',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
    paddingRight:10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    height: 30,
    paddingLeft: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
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
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  transactionButton: {
    width: '30%',
    backgroundColor: '#ddd',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
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
});
