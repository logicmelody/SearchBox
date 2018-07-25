import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import loggerMiddleWare from "redux-logger";
import { createEpicMiddleware } from 'redux-observable';

import SearchBox from "./search-box";
import reducers from "./reducers";
import epics from "./epics";

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
	const epicMiddleware = createEpicMiddleware();
	const store = createStore(reducers, {}, applyMiddleware(loggerMiddleWare, epicMiddleware));
	
	epicMiddleware.run(epics);

	return store;
}

export default App;
