import React from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SettingsItem = ({navigation, target, name, isImplemented}) => {
	
const handleUnimplementedFeature = () => {
	Alert.alert(
		"Under Development",
		"This feature is currently under development. Please check back later.",
		[{ text: "OK" }]
	);
	};

  return (
    <TouchableNativeFeedback
      onPress={isImplemented ? () => navigation.navigate(target.replace(/\s/g, '')): () => handleUnimplementedFeature()}
    >
      <View style={styles.settingsItem}>
        <Text style={styles.subtitle}>{name ? name : target}</Text>
        <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
      </View>
    </TouchableNativeFeedback>

  );
};

const styles = StyleSheet.create({
	settingsItem: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		marginTop: 10,
	},
	subtitle: {
		fontSize: 18,
		marginBottom: 5,
	  },
	});

export default SettingsItem;
