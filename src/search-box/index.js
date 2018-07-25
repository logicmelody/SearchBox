import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
} from "react-native";

class SearchBox extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>SearchBox</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	}
});

export default SearchBox;
