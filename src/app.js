import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import SearchBox from "./search-box";
import reducers from "./reducers";

class App extends Component {
	render() {
		const store = createStore(reducers, {});

		return (
			<Provider store={store}>
				<SearchBox />
			</Provider>
		);
	}
}

export default App;
