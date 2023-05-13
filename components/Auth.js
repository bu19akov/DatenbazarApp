import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const Auth = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authenticateUser = () => {
    // Logik für die Authentifizierung hinzufügen
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={authenticateUser}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text 
        style={styles.linkText} 
        onPress={() => navigation.navigate('UserRegister')}
      >
        New User? Sign Up
      </Text>
      <Text 
        style={styles.linkText}
        onPress={() => navigation.navigate('CompanyRegister')}
      >
        Register as Company
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: 'gray',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 50,
    marginTop: 100
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  linkText: {
    color: 'white',
    textAlign: 'center',
    padding:3
  },
});

export default Auth;
