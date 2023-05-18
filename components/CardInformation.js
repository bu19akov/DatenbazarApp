import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import FacebookIcon from 'react-native-vector-icons/FontAwesome';
import GoogleIcon from 'react-native-vector-icons/FontAwesome';
import EmailIcon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';

const CardInformation = ({ navigation }) => {
 
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedChecklist, setSelectedChecklist] = useState('');
  const [iban, setIBAN] = useState("");
  const [bic, setBIC] = useState("");
  const [adress, setAdress] = useState("");

  const handleChecklistPress = (checklist) => {
    setSelectedChecklist(checklist);
  };

  const SlideInMenu = () => (
    <View style={styles.slideInMenu}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
        >
          <CloseIcon name="close" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('About')}>
        <Text style={styles.menuButtonText}>About us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Product')}>
        <Text style={styles.menuButtonText}>Product</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Privacy')}>
        <Text style={styles.menuButtonText}>Privacy policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.menuButtonText}>Contact us</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TouchableOpacity style={styles.menuIcon} onPress={() => setModalVisible(true)}>
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

      <View style={styles.Maincontainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button} >
            <Icon name="checkmark-circle-outline" size={16} color="white" style={styles.icon} />
            <Text style={styles.buttonText}>Personal information</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOnThisPage} >
            <Text style={styles.buttonText}>Payout Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Data for sale</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.divider}>choose your payout method:</Text>
        <View style={styles.checklistContainer}>
        <TouchableOpacity
          style={[
            styles.checklistButton,
            selectedChecklist === 'checklist1' && styles.checklistButtonSelected,
          ]}
          onPress={() => handleChecklistPress('checklist1')}
        >
          {selectedChecklist === 'checklist1' ? (
            <Icon name="checkmark-circle" size={16} color="black" style={styles.checklistIcon} />
          ) : (
            <Icon name="ellipse-outline" size={16} color="black" style={styles.checklistIcon} />
          )}
          <Text style={styles.checklistText}>Visa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.checklistButton,
            selectedChecklist === 'checklist2' ,
          ]}
          onPress={() => handleChecklistPress('checklist2')}
        >
          {selectedChecklist === 'checklist2' ? (
            <Icon name="checkmark-circle" size={16} color="black" style={styles.checklistIcon} />
          ) : (
            <Icon name="ellipse-outline" size={16} color="black" style={styles.checklistIcon} />
          )}
          <Text style={styles.checklistText}>Mastercard</Text>
        </TouchableOpacity>
        
      </View>    
      <View style={styles.line} />
      <View style={styles.container}>
      <Text style={styles.subTitle}>Add new card</Text>
      
      <Text style={styles.inputLabel}>IBAN:</Text>
      <TextInput
        style={styles.input}
        value={iban}
        onChangeText={setIBAN}
        underlineColorAndroid="black"
      />
      <Text style={styles.inputLabel}>BIC:</Text>
      <TextInput
        style={styles.input}
        value={bic}
        onChangeText={setBIC}
        underlineColorAndroid="black"
      />
      <Text style={styles.inputLabel}>Adress:</Text>
      <TextInput
        style={styles.input}
        value={adress}
        onChangeText={setAdress}
        underlineColorAndroid="black"
      />
      <TouchableOpacity
        style={styles.submitButton}
        
      >
        <Text style={styles.buttonText}>Save Payout details</Text>
      </TouchableOpacity>
      </View>
      </View>
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
  Maincontainer: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#F0F0F0',
  },
  icon: {
    marginRight: 10,
    color: 'green',

  },
  button: {
    backgroundColor: '#BABABA',
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    width: '30%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  menuIcon: {
    position: 'absolute',
    top: 50,
    right: 10,

  },
  title: {
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    marginTop: 80,
  },
  subTitle: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  buttonText: {

    color: 'black',
    alignItems: 'center',
    fontSize: 16,
  },
  divider: {
    paddingTop: 20,
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

  buttonOnThisPage: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    width: '30%',
  },
  
  checklistContainer: {
    alignSelf: 'flex-start',
   
  },
  checklistButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  
  checklistIcon: {
    marginRight: 10,
  },
  checklistText: {
    color: 'black',
    fontSize: 16,
  },
  line: {
    width: Dimensions.get('window').width - 30, // Line width based on window width
    height: 1,
    backgroundColor: 'black',
    marginVertical: 20,
  },
  
  inputLabel: {
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    height: 40,
    paddingLeft: 10,
  
    width: '100%',
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#BABABA',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    width: '80%',
  },
});

export default CardInformation;


