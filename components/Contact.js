import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import FacebookIcon from 'react-native-vector-icons/FontAwesome';
import GoogleIcon from 'react-native-vector-icons/FontAwesome';
import EmailIcon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';


const Contact = ({ navigation }) => {
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
            <TouchableOpacity style={styles.menuButton}
            onPress={() => navigation.navigate('About')}><Text 
            style={styles.menuButtonText}>About us</Text></TouchableOpacity>
            <TouchableOpacity style={styles.menuButton}
            ><Text
             style={styles.menuButtonText}
             onPress={()=> navigation.navigate('Product')}>Product</Text></TouchableOpacity>
            <TouchableOpacity style={styles.menuButton}
            onPress={() => navigation.navigate('Privacy')}><Text 
            style={styles.menuButtonText}>Privacy policy</Text></TouchableOpacity>
            <TouchableOpacity style={styles.menuButton}
            onPress={() => navigation.navigate('Contact')}
            ><Text
             style={styles.menuButtonText}>Contact us </Text></TouchableOpacity>
        </View>
      );    

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
            <Text style={styles.title}>Contact us</Text>
            <Text style={styles.text}>
                <Text style={styles.bold}>Email:</Text> contact@DataBazar.com{"\n\n"}
                <Text style={styles.bold}>Phone:</Text> +43 01 427778101{"\n\n"}
                <Text style={styles.bold}>Address:</Text> DataBazar, Währinger Str. 29, 1090 Vienna, Austria {"\n\n"}
                We're available to assist you Monday through Friday, from 9am to 5pm CET. {"\n"}
                Thank you for your support of DataBazar!
            </Text>
            <Text style={styles.subheading}>We are happy to hear from you!</Text>
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
        marginTop: 100,
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
    text: {
        fontSize: 16,
        lineHeight: 24,
        marginVertical: 10,
        paddingHorizontal: 20,
        textAlign: 'justify',
    },

    subheading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    bold: {
        fontWeight: 'bold',
    },
});


export default Contact;