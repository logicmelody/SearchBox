import React, { Component } from "react";
import {
	StyleSheet,
	View,
} from "react-native";
import { connect } from "react-redux";

import { setSearchText } from "../actions/search-box-actions";
import Input from "../components/Input";

class SearchBox extends Component {
	render() {
		const { searchBox, setSearchText } = this.props;
		const searchText = searchBox.get("searchBox");

		return (
			<View style={styles.container}>
				<Input
					label={"SearchBox"}
					placeholder={"Let's search something..."}
					value={searchText}
					onChangeText={setSearchText.bind(this)}
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

const mapStateToProps = state => {
	return { searchBox: state.searchBox };
};

export default connect(mapStateToProps, { setSearchText })(SearchBox);
