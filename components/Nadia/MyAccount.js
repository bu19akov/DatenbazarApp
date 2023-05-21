import React, { useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AuthContext } from '../Vladimir/AuthContext';


export default function MyAccount() {
  const { logoutUser } = useContext(AuthContext);
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
        { 
          text: "Yes", 
          onPress: () => {
            logoutUser(navigation);
          } 
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
          <Text style={styles.title}>My Account</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AccountSettings')}>
              <Ionicons name="settings" size={24} color="black" />
          </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="account-circle" size={24} color="black" />
        <Text style={styles.input}>{username}</Text>
      </View>

      {/* <TouchableOpacity style={styles.option}>
        <MaterialIcons name="verified-user" size={24} color="black" />
        <Text>Verified Profile</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity> */}
    
      <Text style={styles.subtitle}>Transaction list</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <MaterialIcons name="pending-actions" size={20} color="black" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Awaiting Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <MaterialIcons name="autorenew" size={20} color="black" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Transaction in Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <MaterialIcons name="list" size={20} color="black" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>All transactions</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('DataForSaleOverview')}>
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

      <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={handleLogout}>
              <MaterialIcons name="logout" size={24} color="black" />
          </TouchableOpacity>
      </View>
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
    alignItems: 'center',
    marginBottom: 20,
    paddingRight:10,
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
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  buttonIcon: {
    alignSelf: 'center',
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
