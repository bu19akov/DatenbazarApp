import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const DataForSale = ({ image, dataName, price, questions}) => {
  const navigation = useNavigation();
  const [answers, setAnswers] = useState();
  const [storageChanged, setStorageChanged] = useState(false);

  const handleOnStoreChange = () => {
    setStorageChanged(true);
  }

  const handleOnPress = () => {
    navigation.navigate('DataForSaleQuestionnaire', {questions, price, dataName, handleOnStoreChange});
  };

  useEffect(() => {
    
    const loadSavedAnswers = async () => {
      try {
        const jsonAnswers = await AsyncStorage.getItem(dataName);
        if (jsonAnswers !== null) {
          const savedAnswers = JSON.parse(jsonAnswers);
          setAnswers(savedAnswers);
        }
      } catch (error) {
        console.log('Error loading saved answers:', error);
      }
    }
    loadSavedAnswers();
  }, [storageChanged]);

  return (
      <TouchableOpacity style={[styles.container, answers && styles.answered]} onPress={handleOnPress}>
          <Image source={image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{dataName}</Text>
            <Text style={styles.text}>{price}$ per month</Text>
          </View>
          {answers &&
          <View style={styles.doneButton}>
            <Icon name="check" size={20} color="#33BB5D" />
          </View>
          }
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    height: 90,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    margin: 5,
  },
  textContainer: {
    flex: 5,
    flexDirection: 'column',
    marginLeft: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  answered: {
    backgroundColor: '#C4C4C4',
  },
  doneButton: {
    flex: 1,
    justifyContent: 'flex-end',
  }
});


export default DataForSale;