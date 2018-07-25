import { Map } from "immutable";

import {
	SET_SEARCH_TEXT,
} from "../actions/action-types";

const INITIAL_STATE = Map({
	searchText: "",
});

export default function searchBox(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_SEARCH_TEXT:
			return state.set("searchText", action.payload);

		default:
			return state;
	}
}