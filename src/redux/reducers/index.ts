import { combineReducers } from "redux";
import { repositoriesReducer } from "./repositoriesReducer";

export const rootReducer = combineReducers({
	repositories: repositoriesReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
