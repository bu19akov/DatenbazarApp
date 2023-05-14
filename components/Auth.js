import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import FacebookIcon from 'react-native-vector-icons/FontAwesome';
import GoogleIcon from 'react-native-vector-icons/FontAwesome';
import EmailIcon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';


const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const SlideInMenu = () => (
    <View style={styles.slideInMenu}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
        >
          <CloseIcon name="close" size={30} color="black" />
        </TouchableOpacity>
      </View>
        <TouchableOpacity style={styles.menuButton}><Text style={styles.menuButtonText}>About</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}><Text style={styles.menuButtonText}>Product</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}><Text style={styles.menuButtonText}>Privacy</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}><Text style={styles.menuButtonText}>Contact us</Text></TouchableOpacity>
    </View>
  );    

  const authenticateUser = () => {
    // Logik für die Authentifizierung hinzufügen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuIcon}
        onPress={() => setModalVisible(true)}
      >
        <Icon name="ellipsis-vertical" size={30} color="black" />
      </TouchableOpacity>

      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        style={styles.modal}
        swipeDirection="right"
        onSwipeComplete={() => setModalVisible(false)}
        animationIn="slideInRight"
        animationOut="slideOutRight" 
      >
        <SlideInMenu />
      </Modal>


      <Text style={styles.title}>Data Bazar</Text>
      <Text style={styles.header}>Earning money with your data - so simple as never before</Text>

      <Text style={styles.inputLabel}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        underlineColorAndroid="black"
      />

      <Text style={styles.inputLabel}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        underlineColorAndroid="black"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={authenticateUser}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.divider}>or</Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <View style={styles.buttonContent}>
          <EmailIcon name="envelope" size={20} color="black" />
          <Text style={styles.buttonText}>Sign up with Email</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <View style={styles.buttonContent}>
          <FacebookIcon name="facebook-square" size={20} color="black"/>
          <Text style={styles.buttonText}>Sign up with Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <View style={styles.buttonContent}>
          <GoogleIcon name="google" size={20} color="black" />
          <Text style={styles.buttonText}>Sign up with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
  },
  menuIcon: {
    position: 'absolute',
    top: 50,
    right: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    marginTop:100,
  },
  header: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 50,
    color: 'black',
    marginLeft: 60,
    marginRight: 60,
  },
  inputLabel: {
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    height: 40,
    paddingLeft: 10,
    marginBottom: 25,
    width: '100%',
  },
  button: {
    backgroundColor: '#BABABA',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    width: '80%',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
  },
  divider: {
    fontSize: 15,
    color: 'black',
    marginBottom: 15,
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 0,
  },
  slideInMenu: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  menuButton: {
    paddingVertical: 5,
    marginBottom: 10,
    marginLeft: 20,
  },
  menuButtonText: {
    color: 'gray',
    fontSize: 22,
  },
  closeIconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
  },
});

export default Auth;
