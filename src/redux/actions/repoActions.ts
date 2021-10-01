import { ActionType } from "../action-types/repoTypes"

interface SearchReposAction {
    type: ActionType.SEARCH_REPOS
}

interface SearchReposSuccessAction{
    type:ActionType.SEARCH_REPOS_SUCCESS;
    payload:string[]
}

interface searchReposErrorAction {
    type:ActionType.SEARCH_REPOS_ERROR
    payload:string;
}

export  type Action = |SearchReposAction | SearchReposSuccessAction | searchReposErrorAction

