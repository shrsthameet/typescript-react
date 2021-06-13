import { ActionType } from "../actionTypes";

interface ISearchRepositories {
	type: ActionType.SEARCH_REPOSITORIES;
}
interface ISearchRepositoriesSucceeded {
	type: ActionType.SEARCH_REPOSITORIES_SUCCEEDED;
	payload: string[];
}
interface ISearchRepositoriesFailed {
	type: ActionType.SEARCH_REPOSITORIES_FAILED;
	payload: string;
}

export type TSearchRepoAction = ISearchRepositories | ISearchRepositoriesSucceeded | ISearchRepositoriesFailed;
