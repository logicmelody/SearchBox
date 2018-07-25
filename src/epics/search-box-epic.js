import { ofType } from "redux-observable";
import { debounceTime, map } from "rxjs/operators";

import {
	START_FETCH_SEARCH_DATA,
} from "../actions/action-types";

import {
	fetchSearchDataSuccessed,
} from "../actions/search-box-actions";

function fetchSearchData(action$) {
	return action$.pipe(
		ofType(START_FETCH_SEARCH_DATA),
		debounceTime(1000),
		map(action => fetchSearchDataSuccessed("Search data is " + action.payload))
	);
}

export { fetchSearchData };