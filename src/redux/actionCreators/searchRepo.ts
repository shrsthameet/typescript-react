import Axios from "axios";
import { Dispatch } from "redux";
import { TSearchRepoAction } from "../actions";
import { ActionType } from "../actionTypes";

export const searchRepo = (term: string) => async (dispatch: Dispatch<TSearchRepoAction>) => {
	dispatch({
		type: ActionType.SEARCH_REPOSITORIES,
	});

	try {
		const { data } = await Axios({
			method: "GET",
			url: `https://registry.npmjs.org/-/v1/search`,
			params: {
				text: term,
			},
		});
		const names = data.objects.map((result: any) => result.package.name);
		dispatch({
			type: ActionType.SEARCH_REPOSITORIES_SUCCEEDED,
			payload: names,
		});
	} catch (error) {
		dispatch({
			type: ActionType.SEARCH_REPOSITORIES_FAILED,
			payload: error.message,
		});
	}
};
