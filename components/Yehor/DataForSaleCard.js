import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const DataForSaleCard = ({ image, dataCategory, amount, data}) => {


  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("DataForSaleList", { dataCategory, data });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image source={image} style={styles.image} />
        <Text style={styles.subtitle}>{dataCategory}</Text>
        <Text style={styles.text}>{amount} possible items</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  text: {
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginTop: 20,
  }
});


export default DataForSaleCard;