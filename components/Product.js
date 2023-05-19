import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Product = ({ navigation }) => {
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
                <Text style={styles.title}>Product</Text>
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
                    DataBazar is a cutting-edge platform that allows users to securely and transparently share their medical
                    data for research purposes.{"\n"}
                    Our user-friendly app is designed with privacy and security in mind, ensuring that
                    your sensitive medical information is protected at all times. {"\n"}With DataBazar, you can choose to share your data with leading
                    healthcare providers and research institutions, who use it to develop new treatments and improve patient outcomes.
                    You can also earn money for sharing your data, giving you an opportunity to benefit from your participation in
                    medical research.{"\n"}
                    Our app is easy to use and intuitive, with clear and concise instructions that guide you through the data sharing process.
                    You can choose which data to share and with whom, and can withdraw your consent and delete your data at any time.
                    We also provide regular updates on how your data is being used and the impact it's having on medical research.{"\n"}
                    DataBazar is trusted by leading healthcare organizations and researchers around the world. Join us today and be a
                    part of the next generation of medical research!
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


export default Product;
