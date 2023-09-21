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
		<View>
			<Text style={styles.paragraph}>{text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		display:"flex",
		justifyContent: "center",
		alignItems: "center",
		// flexDirection: "row",
		// gap:10
	},
	paragraph: {
            // flex:1,
		display:"flex",
		fontSize: 20,
		justifyContent:'center',
		alignItems: "center",
		textAlign:"center"
	},
});
