import React, { useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, Dimensions, StatusBar } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AuthContext } from '../Vladimir/AuthContext';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function MyAccount() {
  const { logoutUser } = useContext(AuthContext);
  const navigation = useNavigation();
  const route = useRoute();

  const username = route.params ? route.params.username : 'Unknown User';

  const handleUnimplementedFeature = () => {
    Alert.alert(
      "Under Development",
      "This feature is currently under development. Please check back later.",
      [{ text: "OK" }]
    );
  };

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

      <View style={[styles.header, { width: SCREEN_WIDTH }]}>
        <TouchableOpacity onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>My Account</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AccountSettings")}>
          <Ionicons name="settings" size={24} color="black" />
        </TouchableOpacity>
        <View />
      </View>

      <View style={styles.screen}>

      <View style={styles.inputContainer}>
        <MaterialIcons name="account-circle" size={24} color="black" />
        <Text style={styles.input}>{username}</Text>
      </View>
  

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('DataForSaleOverview')}>
        <Text>My Data for Sale</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Contact')}>
        <Text>Contact Support</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingLeft: 15,
  },
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#E0E0E0',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingRight: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    flex: 1, 
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