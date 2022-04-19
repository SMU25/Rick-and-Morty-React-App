import { combineReducers } from "redux";

import { characters } from "./characters";

export const rootReducer = combineReducers({
  characters: characters,
});
