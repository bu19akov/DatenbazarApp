import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, Alert, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const RegistrationScreen = ({ navigation }) => {
  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const dobRef = useRef(null);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const bicRef = useRef(null);
  const ageRef = useRef(null);
  const occupationRef = useRef(null);
  const hobbyRef = useRef(null);

  const [step, setStep] = useState(0);

  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    surname: "",
    dateOfBirth: "",
    email: "",
    username: "",
    password: ""
  });

  const [payoutDetails, setPayoutDetails] = useState({
    iban: "",
    bic: ""
  });

  const [dataForSale, setDataForSale] = useState({
    gender: "",
    age: "",
    occupation: "",
    hobby: ""
  });

  const isValidDateOfBirth = (dob) => {
    const parts = dob.split("/");
    const dobDate = new Date(parts[2], parts[1] - 1, parts[0]);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    if (Object.prototype.toString.call(dobDate) === "[object Date]") {
      if (isNaN(dobDate.getTime())) {
        return false;
      } else {
        if (dobDate > today) {
          return false;
        } else {
          return true;
        }
      }
    } else {
      return false;
    }
  };

  const isValidEmail = (email) => {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };

  const isValidUsername = async (username) => {
    try {
      const response = await fetch(`https://datenbazar-app.vercel.app/api/check-username/${username}`);
      const data = await response.json();
      
      if (data.unique) {
        console.log('The username ' + username + ' is unique!');
        return true;
      } else {
        console.log('The username ' + username + ' is not unique.');
        return false;
      }
    } catch (error) {
      console.error('Error:', error);
      return false; // Or throw an error or handle this however you like
    }
  }

  const isValidPassword = (password) => {
    // Minimum 1 number, 1 letter, 1 special symbol, and at least 8 characters
    var re = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    return re.test(password);
  };

  const previousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  async function createUser(userData) {
    try {
      const response = await fetch('https://datenbazar-app.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log(`New user created with the following id: ${result.id}`);
      } else {
        console.error(`Error occurred while creating user: ${result.error}`);
      }
    } catch (err) {
      console.error(`Error occurred while creating user: ${err}`);
    }
  }

  const nextStep = async () => {
    if (step === 0) {
      if (!personalInfo.name) {
        Alert.alert('Name is empty', 'Please enter your name.');
        return;
      }
  
      if (!personalInfo.surname) {
        Alert.alert('Surname is empty', 'Please enter your surname.');
        return;
      }
  
      if (!personalInfo.dateOfBirth) {
        Alert.alert('Date of birth is empty', 'Please enter your date of birth.');
        return;
      }

      if (!isValidDateOfBirth(personalInfo.dateOfBirth)) {
        Alert.alert('Invalid date of birth', 'Please enter a valid date of birth.');
        return;
      }
  
      if (!isValidEmail(personalInfo.email)) {
        Alert.alert('Invalid email', 'Please enter a valid email address.');
        return;
      }

      const isUsernameUnique = await isValidUsername(personalInfo.username);
      if (!isUsernameUnique) {
          Alert.alert('This username already exists', 'Please enter another username.');
          return;
      }
  
      if (!isValidPassword(personalInfo.password)) {
        Alert.alert('Invalid password', 'Please enter a valid password. It should contain at least 1 number, 1 letter, 1 special symbol, and be at least 8 characters long.');
        return;
      }
    } else if (step === 1) {
      if (!payoutDetails.iban) {
        Alert.alert('IBAN is empty', 'Please enter your IBAN.');
        return;
      }

      if (!payoutDetails.bic) {
        Alert.alert('BIC is empty', 'Please enter your BIC.');
        return;
      }
    } else if (step === 2) {
      if (!dataForSale.gender) {
        Alert.alert('Gender is empty', 'Please enter your gender.');
        return;
      }

      if (!dataForSale.age) {
        Alert.alert('Age is empty', 'Please enter your age.');
        return;
      }

      if (!dataForSale.occupation) {
        Alert.alert('Occupation is empty', 'Please enter your occupation.');
        return;
      }

      if (!dataForSale.hobby) {
        Alert.alert('Hobby is empty', 'Please enter your hobby.');
        return;
      }

      const userData = {
        username: personalInfo.username,
        email: personalInfo.email,
        password: personalInfo.password, // Password must be hashed
      };

      createUser(userData).catch(console.dir);
    }
  
    setStep(step + 1);
  };
  

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={[styles.header, { width: SCREEN_WIDTH }]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="angle-left" size={40} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Sign up</Text>
          <View />
        </View>
        <View style={styles.formContainer}>
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
            <TextInput 
              ref={nameRef}
              style={styles.input} 
              value={personalInfo.name} 
              onChangeText={text => setPersonalInfo({ ...personalInfo, name: text })} 
              placeholder="John"
              onSubmitEditing={() => surnameRef.current.focus()}
              returnKeyType="next"
              blurOnSubmit={false}
            />
            <Text style={styles.inputLabel}>Surname:</Text>
            <TextInput 
              ref={surnameRef}
              style={styles.input} 
              value={personalInfo.surname} 
              onChangeText={text => setPersonalInfo({ ...personalInfo, surname: text })} 
              placeholder="Doe"
              onSubmitEditing={() => dobRef.current.focus()}
              returnKeyType="next"
              blurOnSubmit={false}
            />
            <Text style={styles.inputLabel}>Date of Birth:</Text>
            <TextInput 
              ref={dobRef}
              style={styles.input} 
              value={personalInfo.dateOfBirth}
              placeholder="DD/MM/YYYY"
              keyboardType="numeric"
              onChangeText={(text) => {
                let newText = text.replace(/[^0-9]/g, "");

                let len = newText.length;
                
                if (len < 3) {
                  newText = newText;
                } else if (len < 5) {
                  newText = newText.slice(0,2) + "/" + newText.slice(2);
                } else {
                  newText = newText.slice(0,2) + "/" + newText.slice(2,4) + "/" + newText.slice(4,8);
                }

                setPersonalInfo({ ...personalInfo, dateOfBirth: newText });
              }}
              onSubmitEditing={() => emailRef.current.focus()}
              returnKeyType="next"
              blurOnSubmit={false}
            />
            <Text style={styles.inputLabel}>Email:</Text>
            <TextInput 
              ref={emailRef}
              style={styles.input} 
              value={personalInfo.email} 
              onChangeText={text => setPersonalInfo({ ...personalInfo, email: text })} 
              placeholder="example@gmail.com"
              onSubmitEditing={() => usernameRef.current.focus()}
              returnKeyType="next"
              blurOnSubmit={false}
            />
            <Text style={styles.inputLabel}>Username:</Text>
            <TextInput 
              ref={usernameRef}
              style={styles.input} 
              value={personalInfo.username} 
              onChangeText={text => setPersonalInfo({ ...personalInfo, username: text })} 
              placeholder="johndoe10"
              onSubmitEditing={() => passwordRef.current.focus()}
              returnKeyType="next"
              blurOnSubmit={false}
            />
            <Text style={styles.inputLabel}>Password:</Text>
            <TextInput 
              ref={passwordRef}
              style={styles.input} 
              value={personalInfo.password} 
              onChangeText={text => setPersonalInfo({ ...personalInfo, password: text })} 
              secureTextEntry 
              placeholder="********"
              returnKeyType='done'
            />
          </>
        )}

        {step === 1 && (
          <>
            <Text style={styles.inputLabel}>IBAN:</Text>
            <TextInput 
              style={styles.input} 
              value={payoutDetails.iban} 
              onChangeText={text => setPayoutDetails({ ...payoutDetails, iban: text })}
              placeholder='AT483200000012345864'
              onSubmitEditing={() => bicRef.current.focus()}
              returnKeyType="next"
              blurOnSubmit={false}
            />
            <Text style={styles.inputLabel}>BIC:</Text>
            <TextInput 
              ref={bicRef}
              style={styles.input} 
              value={payoutDetails.bic} 
              onChangeText={text => setPayoutDetails({ ...payoutDetails, bic: text })}
              placeholder='RLNWATWWXXX'
              returnKeyType='done'
            />
          </>
        )}

        {step === 2 && (
          <>
            <Text style={styles.inputLabel}>Gender:</Text>
            <TextInput 
              style={styles.input} 
              value={dataForSale.gender} 
              onChangeText={text => setDataForSale({ ...dataForSale, gender: text })}
              placeholder='Male'
              onSubmitEditing={() => ageRef.current.focus()}
              returnKeyType="next"
              blurOnSubmit={false}
            />
            <Text style={styles.inputLabel}>Age:</Text>
            <TextInput 
              ref={ageRef}
              style={styles.input} 
              keyboardType="numeric"
              value={dataForSale.age}
              placeholder='18'
              onChangeText={text => setDataForSale({ ...dataForSale, age: text })}
              onSubmitEditing={() => occupationRef.current.focus()}
              returnKeyType="next"
              blurOnSubmit={false}
            />
            <Text style={styles.inputLabel}>Occupation:</Text>
            <TextInput 
              ref={occupationRef}
              style={styles.input} 
              value={dataForSale.occupation} 
              placeholder='Student'
              onChangeText={text => setDataForSale({ ...dataForSale, occupation: text })}
              onSubmitEditing={() => hobbyRef.current.focus()}
              returnKeyType="next"
              blurOnSubmit={false}
            />
            <Text style={styles.inputLabel}>Hobby:</Text>
            <TextInput 
              ref={hobbyRef}
              style={styles.input} 
              value={dataForSale.hobby} 
              placeholder='Football'
              onChangeText={text => setDataForSale({ ...dataForSale, hobby: text })}
              returnKeyType='done'
            />
          </>
        )}

        {step === 3 && (
          <>
            <Icon name="check-circle" size={100} color="#33BB5D" style={styles.icon}/>
            <Text style={styles.completedReg}>Registration completed successfully!</Text>
          </>
        )}
      </View>

      {step !== 3 && (
        <View style={styles.buttonsContainer}>
          {step !== 0 && (
            <TouchableOpacity style={styles.button} onPress={previousStep}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.button} onPress={nextStep}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}

      {step === 3 && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AuthScreen")}>
            <Text style={styles.buttonText}>Go back to Login</Text>
          </TouchableOpacity>
        </View>
      )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    paddingTop: StatusBar.currentHeight,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  buttonsContainer: {
    marginBottom: 10,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
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
  inputLabel: {
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    height: 20,
    paddingLeft: 10,
    marginBottom: 20,
    width: '100%',
    borderBottomColor:'black',
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: '#BABABA',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    width: '40%',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
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
  },
  completedReg: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  }
});

export default RegistrationScreen;
