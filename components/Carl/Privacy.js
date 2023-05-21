import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Privacy = ({ navigation }) => {

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
            <View style={[styles.header, { width: SCREEN_WIDTH }]}>
                <TouchableOpacity onPress={() => navigation.navigate("AuthScreen")}>
                    <Icon2 name="angle-left" size={40} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Privacy Policy</Text>
                <TouchableOpacity style={styles.menuIcon} onPress={() => setModalVisible(true)}>
                    <Icon name="ellipsis-vertical" size={30} color="black" />
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
                </TouchableOpacity>
            </View>
            <ScrollView>
                <Text style={styles.text}>
                    Your privacy and data security are our top priorities at DataBazar.{"\n"}
                    We understand the sensitive nature of medical data and take every precaution to ensure that your information is protected.
                    All data collected through our app is encrypted and stored securely on our servers, which are regularly monitored and maintained to ensure maximum security.
                    We follow all applicable laws and regulations related to the collection and use of medical data, including the General Data Protection Regulation (GDPR) in the European Union. {"\n"}
                    We obtain explicit consent from users before collecting their data and only collect the minimum amount of information necessary for our services. We also provide users with the ability to withdraw their consent and delete their data at any time. {"\n"}
                    In addition, we de-identify all data collected through our platform to protect user privacy. This means that all personal identifying information is removed from the data, and it cannot be traced back to individual users.
                    We also have strict policies and procedures in place to ensure that only authorized personnel have access to the data, and that it is only used for legitimate purposes, such as medical research and development. {"\n"}
                    At DataBazar, we believe that transparency is key. We provide clear and concise information about our data collection and use practices in our terms of service and privacy policy. We also regularly update our users on any changes to our policies or procedures that may affect their data.
                    You can trust DataBazar to keep your medical data safe and secure. Join us today and contribute to cutting-edge medical research while maintaining control over your personal information.
                </Text>
            </ScrollView>
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
});


export default Privacy;