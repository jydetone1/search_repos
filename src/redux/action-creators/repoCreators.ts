import axios from "axios"
import {ActionType} from  "../action-types/repoTypes"
import {Action} from "../actions/repoActions"
import { Dispatch } from "redux"

export const searchRepos = (term: string)=>async(
     dispatch:Dispatch<Action>
) =>{
  dispatch({
    type:ActionType.SEARCH_REPOS
  });
  try {
      const{data} = await axios.get(`https://api.github.com/users/${term}/repos`)
      const users = data.slice(0, 5).map(( result:any)=> result)
      dispatch({
          type:ActionType.SEARCH_REPOS_SUCCESS,
          payload:users
      });

  }catch(error:any){
    dispatch({
        type:ActionType.SEARCH_REPOS_ERROR,
        payload:error.message
    })
  }
}