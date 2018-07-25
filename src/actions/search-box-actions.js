import {
	SET_SEARCH_TEXT,
} from "./action-types";

export function setSearchText(text) {
	return {
		type: SET_SEARCH_TEXT,
		payload: text,
	}
}
