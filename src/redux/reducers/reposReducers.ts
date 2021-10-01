import {ActionType} from "../action-types/repoTypes";
import {Action} from "../actions/repoActions"

interface ReposState {
    loading: boolean;
    error: string | null;
    data: string[]
}

const initialState: ReposState = {
    loading:false,
    error:null,
    data: []
}

const reducer = (state:ReposState= initialState, action:Action):ReposState=>{
    switch(action.type){
        case ActionType.SEARCH_REPOS:
            return{
                ...state,
                loading: true
            };
         case ActionType.SEARCH_REPOS_SUCCESS:
             return{
                 loading:false,
                 error:null,
                 data:action.payload,
             };
         case ActionType.SEARCH_REPOS_ERROR:
             return{
                 loading:false,
                 error:action.payload,
                 data:[],
             };
         default:
             return state;
    }
    
}

export default reducer