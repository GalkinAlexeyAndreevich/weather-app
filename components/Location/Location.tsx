import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface IProps {
	nameCity: string
}

export default function Location({ nameCity }: IProps) {
	let text = "Waiting..";
	if (nameCity) {
		text = nameCity;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.paragraph}>{text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		display: "flex",
		// justifyContent: "center",
		// alignItems: "center",
		// flexDirection: "row",
		// gap:10
	},
	paragraph: {
		fontSize: 20,
	},
});
