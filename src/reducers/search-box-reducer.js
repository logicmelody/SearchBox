import { Map } from "immutable";

import {
	SET_SEARCH_TEXT,
	FETCH_SEARCH_DATA_SUCCESSED,
} from "../actions/action-types";

const INITIAL_STATE = Map({
	searchText: "",
	searchData: "",
});

export default function searchBox(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_SEARCH_TEXT:
			return state.set("searchText", action.payload);

		case FETCH_SEARCH_DATA_SUCCESSED:
			return state.set("searchData", action.payload);

		default:
			return state;
	}
}