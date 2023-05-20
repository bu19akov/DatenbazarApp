import React from 'react';
import { View, StyleSheet, Text, StatusBar, SafeAreaView } from 'react-native';
import DataForSaleCard from './DataForSaleCard';
import { DataForSaleJSON } from '../../assets/DataForSaleJSON';

export default function DataForSaleOverview() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Data Bazar</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
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
  }
});
