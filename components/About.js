import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const About = ({ navigation }) => {
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
                <Text style={styles.title}>About us</Text>
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
                <Text style={styles.text}>At DataBazar, we're dedicated to advancing medical research and improving patient outcomes through the power of data.
                    Our team of experienced professionals is passionate about leveraging the latest technologies and methods to collect, analyze,
                    and utilize medical data in innovative ways. {"\n"}
                    We're committed to ensuring that all data we collect is done so ethically and in compliance with all applicable laws and regulations,
                    including the General Data Protection Regulation (GDPR) in the European Union. We work closely with leading healthcare providers,
                    research institutions, and individual users to obtain explicit consent for data collection and use, and always prioritize user privacy and security.
                    At DataBazar, we believe that transparency is key. We provide clear and concise information to our users about our data collection and use practices,
                    as well as updates on how their data is being utilized and the impact it's having on medical research.{"\n"}
                    We also provide opportunities for users to withdraw their consent and delete their data at any time.
                    Our platform is designed to be user-friendly and accessible to everyone, with intuitive interfaces
                    and streamlined data collection processes. We leverage the latest technologies in artificial intelligence,
                    machine learning, and data analytics to extract insights and patterns from medical data, allowing
                    us and our partners to develop new treatments and therapies that can save lives.{"\n"}
                    Join us at DataBazar and be a part of the future of medical research. Together,
                    we can unlock the potential of medical data and make a meaningful impact on the world.
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


export default About;