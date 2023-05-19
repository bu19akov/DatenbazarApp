import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const DataForSale = ({ dataName, price}) => {


  return (
      <TouchableOpacity style={styles.container}>
          <Image source={require('../assets/icon.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{dataName}</Text>
            <Text style={styles.text}>{price}$ per month</Text>
          </View>
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
  }
});


export default DataForSale;