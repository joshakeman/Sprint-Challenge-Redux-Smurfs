import axios from 'axios'

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const FETCHING_START = 'FETCHING_START'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_FAILURE = 'FETCHING_FAILURE'

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_START })

  axios 
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res)
      // Why doesn't this console log work?
      dispatch({
        type: FETCHING_SUCCESS,
        payload: res
      })
    })
    .catch(err => {
      dispatch ({
        type: FETCHING_FAILURE,
        payload: err
      })
    })
}