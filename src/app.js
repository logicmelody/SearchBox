import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import loggerMiddleWare from "redux-logger";

import SearchBox from "./search-box";
import reducers from "./reducers";

class App extends Component {
	render() {
		const store = configureStore();

		return (
			<Provider store={store}>
				<SearchBox />
			</Provider>
		);
	}
}

function configureStore() {
	const store = createStore(reducers, {}, applyMiddleware(loggerMiddleWare));

	return store;
}

export default App;
