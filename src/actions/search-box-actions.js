import {
	SET_SEARCH_TEXT,
	START_FETCH_SEARCH_DATA,
	FETCH_SEARCH_DATA_SUCCESSED,
} from "./action-types";

export function setSearchText(text) {
	return {
		type: SET_SEARCH_TEXT,
		payload: text,
	}
}

export function startFetchSearchData(text) {
	return {
		type: START_FETCH_SEARCH_DATA,
		payload: text,
	}
}

export function fetchSearchDataSuccessed(text) {
	return {
		type: FETCH_SEARCH_DATA_SUCCESSED,
		payload: text,
	}
}
