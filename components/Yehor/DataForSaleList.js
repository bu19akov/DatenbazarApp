import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
} from "react-native";
import DataForSale from "./DataForSale";

const DataForSaleList = ({ route }) => {
  const { dataCategory, data } = route.params;

  return (
    <SafeAreaView  style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>{dataCategory}</Text>
        <Text style={styles.subtitle}>
          Add data items you would like to share:
        </Text>
        <View style={styles.dataContainer}>
          {data &&
            data.map((data, index) => {
              return (
                <DataForSale
                  key={index}
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
    width: "95%",
  },
});

export default DataForSaleList;
