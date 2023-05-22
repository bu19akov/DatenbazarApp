import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon2 from 'react-native-vector-icons/FontAwesome';
import DataForSale from "./DataForSale";

const DataForSaleList = ({ route , navigation}) => {
  const { width: SCREEN_WIDTH } = Dimensions.get('window');
  const { dataCategory, data } = route.params;

  return (
    <SafeAreaView  style={styles.container}>
      <View style={[styles.header, { width: SCREEN_WIDTH }]}>
                <TouchableOpacity onPress={() => navigation.navigate("DataForSaleOverview")}>
                    <Icon2 name="angle-left" size={40} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>{dataCategory}</Text>
              </View>
      
      <ScrollView contentContainerStyle={styles.scrollView}>
        
        <Text style={styles.subtitle}>
          Add data items you would like to share:
        </Text>
        <View style={styles.dataContainer}>
          {data &&
            data.map((data, index) => {
              return (
                <DataForSale
                  key={index}
                  image={data.image}
                  dataName={data.dataName}
                  price={data.price}
                  questions={data.questions}
                />
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#E0E0E0",
    width: "100%",
  },
  scrollView: {
    width: "100%",
    jystifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
  },
  dataContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
    width: "95%",
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

export default DataForSaleList;
