import { combineEpics } from "redux-observable";

import {
	fetchSearchData,
} from "./search-box-epic";

const epics = combineEpics(
	fetchSearchData,
);

export default epics;
