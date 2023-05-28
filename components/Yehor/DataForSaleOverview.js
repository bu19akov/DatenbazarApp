import React from 'react';
import { View, StyleSheet, Text, StatusBar, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import DataForSaleCard from './DataForSaleCard';
import { DataForSaleJSON } from '../../assets/DataForSaleJSON';
import Icon2 from 'react-native-vector-icons/FontAwesome';


export default function DataForSaleOverview({ navigation }) {
  const { width: SCREEN_WIDTH } = Dimensions.get('window');
  return (
    <SafeAreaView style={styles.container}>
     <View style={[styles.header, { width: SCREEN_WIDTH }]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon2 name="angle-left" size={40} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Data Bazar</Text>
    </View>
       
        <Text style={styles.subtitle}>Data for sale</Text>
        <Text style={styles.text}>Here you can find data for sale</Text>
		<View style={styles.dataContainer}>
			{DataForSaleJSON.map((data, index) => {
				return (
					<DataForSaleCard key={index} image={data.image} dataCategory={data.dataCategory} amount={data.data.length} data={data.data} />
				)
			})}
		</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#E0E0E0',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
  },
  dataContainer: {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	width: '100%',
	flexWrap: 'wrap',
	width: '90%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    flex: 1, 
  },
  
});
