import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Modal,
  Dimensions,
} from "react-native";
import SuccessfulMessage from "../Nadia/SuccessfullMessage";
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';

const DataForSaleQuestionnaire = ({ route, navigation }) => {
  const { width: SCREEN_WIDTH } = Dimensions.get('window');
  const { questions, dataName, handleOnStoreChange } = route.params;

  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Load saved answers from local storage
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
    };

    loadSavedAnswers();
  }, []);

  const handleInputChange = (question, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value,
    }));
  };

  const handleSubmit = () => {
    const answersWithQuestions = {};
    questions.forEach((question, index) => {
      const questionText = question.questionText;
      const answer = answers[questionText] || ""; // Default to empty string if answer is undefined
      answersWithQuestions[questionText] = answer;
    });

    setIsSubmitted(true);
    handleOnStoreChange();

    // Save answers to local storage
    saveAnswers(answersWithQuestions);
  };

  const saveAnswers = async (answersToSave) => {
    try {
      const jsonAnswers = JSON.stringify(answersToSave);
      await AsyncStorage.setItem(dataName, jsonAnswers);
    } catch (error) {
      console.log('Error saving answers:', error);
    }
  };

  const renderQuestion = (question, index) => {
    switch (question.questionType) {
      case "direct":
        return (
          <View key={index} style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{question.questionText}</Text>
              <TextInput
                style={styles.text}
                placeholder={question.placeholder}
                onChangeText={(value) => handleInputChange(question.questionText, value)}
                value={answers[question.questionText] || ""}
              />
            </View>
          </View>
        );

      case "multipleChoice":
        return (
          <View key={index} style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{question.questionText}</Text>

              <RadioButtonsBlock
                options={question.options}
                selectedOption={answers[question.questionText] || ""}
                onSelect={(value) => handleInputChange(question.questionText, value)}
              />
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  const RadioButtonsBlock = ({ options, selectedOption, onSelect }) => {
    return (
      <View>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => onSelect(option)}
            style={styles.radioButtonsBlock}
          >
            <View
              style={[
                styles.radioInner,
                option === selectedOption && styles.selectedRadioInner,
              ]}
            />
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.safeArea}>
      <Modal animationType="fade" transparent visible={isSubmitted}>
        <View style={styles.modalBackground}>
          <SuccessfulMessage navigation={navigation} />
        </View>
      </Modal>
      <View style={[styles.header, { width: SCREEN_WIDTH }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon2 name="angle-left" size={40} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Upload your data</Text>
              </View>
      <View style={styles.questionnaireContainer}>
        {questions.map((question, index) =>
          renderQuestion(question, index)
        )}
        <TouchableOpacity
          onPress={handleSubmit}
          style={[styles.container, styles.submitButton]}
        >
          <Text style={styles.title}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#E0E0E0",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    paddingTop: StatusBar.currentHeight,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  questionnaireContainer: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  container: {
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    margin: 5,
  },
  textContainer: {
    flexDirection: "column",
    marginLeft: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
  },
  radioButtonsBlock: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioInner: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 10,
  },
  selectedRadioInner: {
    backgroundColor: "#000",
  },
  submitButton: {
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  }
  ,
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    flex: 1, 
  },
});

export default DataForSaleQuestionnaire;
