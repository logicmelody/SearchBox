import React, { Component } from "react";
import {
	StyleSheet,
	View,
	Text,
} from "react-native";
import { connect } from "react-redux";

import { setSearchText, startFetchSearchData } from "../actions/search-box-actions";
import Input from "../components/Input";

class SearchBox extends Component {
	_handleSearchTextChanged = (text) => {
		const { setSearchText, startFetchSearchData } = this.props;

		setSearchText(text);
		startFetchSearchData(text);
	}
	render() {
		const { searchBox } = this.props;
		const searchText = searchBox.get("searchBox");
		const searchData = searchBox.get("searchData");

		return (
			<View style={styles.container}>
				<Input
					label={"SearchBox"}
					placeholder={"Let's search something..."}
					value={searchText}
					onChangeText={this._handleSearchTextChanged}
				/>
				<Text>{searchData}</Text>
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

export default connect(mapStateToProps, { setSearchText, startFetchSearchData })(SearchBox);
