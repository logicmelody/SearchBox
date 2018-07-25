import { combineReducers } from "redux";

import searchBox from "./search-box-reducer";

const reducer = combineReducers({
	searchBox,
});

export default reducer;
