import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const RegistrationScreen = ({ navigation }) => {
  const [step, setStep] = useState(0);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    surname: "",
    email: "",
    password: ""
  });
  const [payoutDetails, setPayoutDetails] = useState({
    iban: "",
    bic: ""
  });
  const [dataForSale, setDataForSale] = useState({
    age: "",
    occupation: "",
    hobbies: ""
  });

  const previousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  const nextStep = () => setStep(step + 1);
  return (
    <View style={styles.container}>
      <View style={[styles.header, { width: SCREEN_WIDTH }]}>
        <TouchableOpacity onPress={() => navigation.navigate("AuthScreen")}>
          <Icon name="angle-left" size={40} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Sign up</Text>
        <View />
      </View>
      <View style={[styles.stepsContainer, { width: SCREEN_WIDTH }]}>
        <View style={[styles.step, step === 0 ? styles.activeStep : styles.inactiveStep]}>
          <View style={styles.stepContent}>
            {step > 0 ? (
              <>
                <Icon name="check-circle" size={30} color="gray" style={styles.icon}/>
                <Text style={styles.textWithTick}>Personal Information</Text>
              </>
            ) : (
              <Text style={styles.centeredText}>Personal Information</Text>
            )}
          </View>
        </View>
        <View style={[styles.step, step === 1 ? styles.activeStep : styles.inactiveStep]}>
          <View style={styles.stepContent}>
            {step > 1 ? (
              <>
                <Icon name="check-circle" size={30} color="gray" style={styles.icon}/>
                <Text style={styles.textWithTick}>Payout Details</Text>
              </>
            ) : (
              <Text style={styles.centeredText}>Payout Details</Text>
            )}
          </View>
        </View>
        <View style={[styles.step, step === 2 ? styles.activeStep : styles.inactiveStep]}>
          <View style={styles.stepContent}>
            {step > 2 ? (
                <>
                  <Icon name="check-circle" size={30} color="gray" style={styles.icon}/>
                  <Text style={styles.textWithTick}>Data for Sale</Text>
                </>
              ) : (
                <Text style={styles.centeredText}>Data for Sale</Text>
              )}
          </View>
        </View>
      </View>

      {step === 0 && (
        <>
          <Text style={styles.inputLabel}>Name:</Text>
          <TextInput style={styles.input} value={personalInfo.name} onChangeText={text => setPersonalInfo({ ...personalInfo, name: text })} underlineColorAndroid="black" />
          <Text style={styles.inputLabel}>Surname:</Text>
          <TextInput style={styles.input} value={personalInfo.surname} onChangeText={text => setPersonalInfo({ ...personalInfo, surname: text })} underlineColorAndroid="black" />
          <Text style={styles.inputLabel}>Email:</Text>
          <TextInput style={styles.input} value={personalInfo.email} onChangeText={text => setPersonalInfo({ ...personalInfo, email: text })} underlineColorAndroid="black" />
          <Text style={styles.inputLabel}>Password:</Text>
          <TextInput style={styles.input} value={personalInfo.password} onChangeText={text => setPersonalInfo({ ...personalInfo, password: text })} secureTextEntry underlineColorAndroid="black" />
          <TouchableOpacity style={styles.button} onPress={nextStep}>
            <Text style={styles.buttonText}>Save Personal Information</Text>
          </TouchableOpacity>
        </>
      )}

      {step === 1 && (
        <>
          <Text style={styles.inputLabel}>IBAN:</Text>
          <TextInput style={styles.input} value={payoutDetails.iban} onChangeText={text => setPayoutDetails({ ...payoutDetails, iban: text })} underlineColorAndroid="black" />
          <Text style={styles.inputLabel}>BIC:</Text>
          <TextInput style={styles.input} value={payoutDetails.bic} onChangeText={text => setPayoutDetails({ ...payoutDetails, bic: text })} underlineColorAndroid="black" />
          <TouchableOpacity style={styles.button} onPress={nextStep}>
            <Text style={styles.buttonText}>Save Payout Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={previousStep}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </>
      )}

      {step === 2 && (
        <>
          <Text style={styles.inputLabel}>Age:</Text>
          <TextInput style={styles.input} value={dataForSale.age} onChangeText={text => setDataForSale({ ...dataForSale, age: text })} underlineColorAndroid="black" />
          <Text style={styles.inputLabel}>Occupation:</Text>
          <TextInput style={styles.input} value={dataForSale.occupation} onChangeText={text => setDataForSale({ ...dataForSale, occupation: text })} underlineColorAndroid="black" />
          <Text style={styles.inputLabel}>Hobbies:</Text>
          <TextInput style={styles.input} value={dataForSale.hobbies} onChangeText={text => setDataForSale({ ...dataForSale, hobbies: text })} underlineColorAndroid="black" />
          <TouchableOpacity style={styles.button} onPress={nextStep}>
            <Text style={styles.buttonText}>Save Data for Sale</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={previousStep}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </>
      )}

      {step === 3 && (
        <>
          <Text style={styles.inputLabel}>Registration complete!</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AuthScreen")}>
            <Text style={styles.buttonText}>Go back to Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={previousStep}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    flex: 1, 
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
  buttonText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },
  icon: {
    marginRight: 5,
  },
  step: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%',
    borderRadius: 50,
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  stepContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
    width: '90%',
  }, 
  activeStep: {
    backgroundColor: '#E0E0E0',
    borderColor: 'black',
  },
  inactiveStep: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  centeredText: {
    textAlign: 'center',
    flex: 1,
  },
  textWithTick: {
    width: "80%",
  }
});

export default RegistrationScreen;
