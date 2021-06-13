import { TSearchRepoAction } from "../actions";
import { ActionType } from "../actionTypes";

interface IState {
	loading: boolean;
	data: string[];
	error: string | null;
}

const initialState = {
	loading: false,
	data: [],
	error: null,
};

export const repositoriesReducer = (state: IState = initialState, action: TSearchRepoAction) => {
	switch (action.type) {
		case ActionType.SEARCH_REPOSITORIES: {
			return {
				...state,
				loading: true,
				data: [],
				error: null,
			};
		}
		case ActionType.SEARCH_REPOSITORIES_SUCCEEDED: {
			return {
				...state,
				loading: false,
				data: action.payload,
				error: null,
			};
		}
		case ActionType.SEARCH_REPOSITORIES_FAILED: {
			return {
				...state,
				loading: false,
				data: [],
				error: action.payload,
			};
		}
		default:
			return state;
	}
};
