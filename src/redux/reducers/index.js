import { combineReducers } from "redux";

import { characters } from "./characters";
import { pages } from "./pages";
import { currentPage } from "./currentPage";

export const rootReducer = combineReducers({
  characters,
  pages,
  currentPage,
});
