import React, { Component } from "react";
import {
	StyleSheet,
	View,
} from "react-native";

import Input from "../components/Input";

class SearchBox extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Input
					label={"SearchBox"}
					placeholder={"Let's search something..."}
				/>
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
