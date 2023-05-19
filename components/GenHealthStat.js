import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';

const GenHealthStat = ({ navigation, questions }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleCheckboxPress = (questionIndex, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [questionIndex]: option,
    }));
  };

  const SlideInMenu = () => (
    <View style={styles.slideInMenu}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <CloseIcon name="close" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.menuButtonText}>About us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('Product')}
      >
        <Text style={styles.menuButtonText}>Product</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('Privacy')}
      >
        <Text style={styles.menuButtonText}>Privacy policy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('Contact')}
      >
        <Text style={styles.menuButtonText}>Contact us</Text>
      </TouchableOpacity>
    </View>
  );

  const renderQuestions = () => {
    return questions.map((question, index) => {
      if (question.questionType === 'direct') {
        return (
          <React.Fragment key={index}>
            <Text style={styles.inputLabel}>{question.questionText}</Text>
            <TextInput
              style={styles.input}
              value={selectedOptions[index] || ''}
              onChangeText={(text) =>
                handleCheckboxPress(index, text)
              }
              placeholder={question.placeholder}
              underlineColorAndroid="black"
            />
          </React.Fragment>
        );
      } else if (question.questionType === 'multipleChoice') {
        return (
          <View key={index} style={styles.checklistContainer}>
            <Text style={styles.divider}>{question.questionText}</Text>
            {question.options.map((option, optionIndex) => (
              <TouchableOpacity
                key={optionIndex}
                style={[
                  styles.checklistButton,
                  selectedOptions[index] === option &&
                  styles.checklistButtonSelected,
                ]}
                onPress={() => handleCheckboxPress(index, option)}
              >
                {selectedOptions[index] === option ? (
                  <Icon
                    name="checkmark-circle"
                    size={16}
                    color="black"
                    style={styles.checklistIcon}
                  />
                ) : (
                  <Icon
                    name="ellipse-outline"
                    size={16}
                    color="black"
                    style={styles.checklistIcon}
                  />
                )}
                <Text style={styles.checklistText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      }
      return null;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {questions === 'General health status'
          ? 'Medical history'
          : questions === 'Specific Health Statistics'
            ? 'Genetic test results'
            : questions === 'Prescription records'
              ? 'Fitness tracker data'
              : questions === 'Blood pressure readings'
                ? 'Dietary habits'
                : questions === 'Sleep patterns'
                  ? 'Allergy information'
                  : questions === 'Immunization records'
                    ? 'Lab test results'
                    : questions === 'Music preferences'
                      ? 'Movie preferences'
                      : questions === 'TV show preferences'
                        ? 'TV show preferences'
                        : ''}
      </Text>

      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setModalVisible(true)}
      >
        <Icon name="menu-outline" size={30} color="black" />
      </TouchableOpacity>

      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        backdropOpacity={0.5}
        backdropColor="white"
        style={styles.modal}
      >
        <SlideInMenu />
      </Modal>

      <View style={styles.formContainer}>{renderQuestions()}</View>

      <TouchableOpacity style={styles.button} onPress={() => { }}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: Dimensions.get('window').width - 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  checklistContainer: {
    marginBottom: 20,
  },
  divider: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checklistButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checklistButtonSelected: {
    backgroundColor: '#c2e8c2',
  },
  checklistIcon: {
    marginRight: 10,
  },
  checklistText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  slideInMenu: {
    backgroundColor: 'white',
    padding: 20,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height,
  },
  closeIconContainer: {
    alignItems: 'flex-end',
  },
  menuButton: {
    marginBottom: 20,
  },
  menuButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  formContainer: {
    marginBottom: 20,
  },
  modal: {
    margin: 0,
  },
});

export default GenHealthStat;
