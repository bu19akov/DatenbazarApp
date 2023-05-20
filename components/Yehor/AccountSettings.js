import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SettingsItem from "./SettingsItem";

export default function AccountSettings() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

	<View style={styles.textContainer}>
        <Text style={styles.title}>Account Settings</Text>
      </View>

      <SettingsItem navigation={navigation} target="Personal Information" />

      <Divider />

      <SettingsItem navigation={navigation} target="Payout Details" />

      <Divider />

      <SettingsItem navigation={navigation} target="Data For Sale Overview" name="Data For Sale" />

      <Divider />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Security</Text>
      </View>

	  <SettingsItem navigation={navigation} target="Change Password" />

	  <Divider />

	  <SettingsItem navigation={navigation} target="Face ID" />

	  <Divider />

	  <SettingsItem navigation={navigation} target="Change PIN" />

	  <Divider />

	  <SettingsItem navigation={navigation} target="Verification" />



      {/* <View style={styles.settingsItem} onPress={() => navigation.navigate("PayoutDetails")}>
			<Text style={styles.subtitle}>Payout Details</Text>
			<MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
		</View>

		<View style={styles.divider} />

		<TouchableNativeFeedback onPress={() => navigation.navigate("DataForSaleOverview")}>
			<View style={styles.settingsItem}>
				<Text style={styles.subtitle}>Data for Sale</Text>
				<MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
			</View>
		</TouchableNativeFeedback>

		<View style={styles.divider} /> */}
    </SafeAreaView>
  );
}

const Divider = () => <View style={styles.divider} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#E0E0E0",
  },
  title: {
    fontSize: 20,
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
    width: "90%",
  },
  settingsItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  divider: {
    width: "100%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  textContainer: {
    width: "100%",
    textAlign: "left",
	marginTop: 20,
  },
});