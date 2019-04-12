/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_START } from '../actions'
import { FETCHING_SUCCESS }from '../actions'
import { FETCHING_FAILURE } from '../actions'

import { ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE } from '../actions'

import { EDIT_SMURF_START, EDIT_SMURF_SUCCESS, EDIT_SMURF_FAILURE} from '../actions'


//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_START:
    console.log(action)
      return {
        ...state,
        fetchingSmurfs: true,
        error: '',
      }
    case FETCHING_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        error: '',
        smurfs: action.payload.data
      }
    case FETCHING_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    case ADD_SMURF_START: 
      return {
        ...state,
        addingSmurf: true,
        error: ''
      }
    case ADD_SMURF_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        addingSmurf: false,
        error: '',
        smurfs: action.payload.data
      }

      case EDIT_SMURF_START: 
      console.log(action)
      return {
        ...state,
        updatingSmurf: true,
        error: ''
      }

      case EDIT_SMURF_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        updatingSmurf: false,
        error: '',
        smurfs: action.payload.data
      }
    default:
    return state

  }
}

export default reducer