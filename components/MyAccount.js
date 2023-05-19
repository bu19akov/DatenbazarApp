import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MyAccount() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Account</Text>
      
      <View style={styles.inputContainer}>
        <MaterialIcons name="account-circle" size={24} color="black" />
        <TextInput 
          placeholder="User Name"
          style={styles.input}
        />
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
          <MaterialIcons name="done-all" size={20} color="black" />
          <Text>All transactions</Text>
        </TouchableOpacity>
      </View>


      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('MyDataForSale')}>
        <Text>My Data for Sale</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('DataSellTransactions')}>
        <Text>Data Sell Transactions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('ContactSupport')}>
        <Text>Contact Support</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  input: {
    flex: 1,
    marginLeft: 10,
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
    paddingVertical: 5,
    paddingHorizontal: 10,
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
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
