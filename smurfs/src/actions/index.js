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

export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS"
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE"

export const EDIT_SMURF_START = 'EDIT_SMURF_START'
export const EDIT_SMURF_SUCCESS = "EDIT_SMURF_SUCCESS"
export const EDIT_SMURF_FAILURE = "EDIT_SMURF_FAILURE"

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

export const addSmurf = smurf => dispatch => {
  dispatch ({ type: ADD_SMURF_START })

  axios 
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch ({
        type: ADD_SMURF_SUCCESS,
        payload: res
      })
    })
    .catch(err => {
      dispatch({
        type: ADD_SMURF_FAILURE,
        payload: err
      })
    })
}

export const editSmurf = (smurfId, smurf) => dispatch => {
  console.log('actioning')
  dispatch ({ type: EDIT_SMURF_START })

  axios 
    .post(`http://localhost:3333/smurfs/${smurfId}`, smurf)
    .then(res => {
      dispatch ({
        type: EDIT_SMURF_SUCCESS,
        payload: res
      })
    })
    .catch(err => {
      dispatch({
        type: EDIT_SMURF_FAILURE,
        payload: err
      })
    })
}