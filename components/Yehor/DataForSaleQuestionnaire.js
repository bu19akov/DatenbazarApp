import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Modal,
} from "react-native";
import SuccessfulMessage from "../Nadia/SuccessfullMessage";

const DataForSaleQuestionnaire = ({ route, navigation }) => {
  const { questions } = route.params;

  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      const answer = answers[index] || ""; // Default to empty string if answer is undefined

      answersWithQuestions[questionText] = answer;
    });
    console.log(answersWithQuestions);
    setAnswers({});
    setIsSubmitted(true);
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
                onChangeText={(value) => handleInputChange(index, value)}
                value={answers[index] || ""}
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
                selectedOption={answers[index] || ""}
                onSelect={(value) => handleInputChange(index, value)}
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
    <View style={styles.safeArea}>
      <Modal animationType="fade" transparent visible={isSubmitted}>
        <View style={styles.modalBackground}>
          <SuccessfulMessage navigation={navigation} />
        </View>
      </Modal>
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
  );
};

const styles = StyleSheet.create({
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
  },
});

export default DataForSaleQuestionnaire;
