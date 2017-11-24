import fetch from 'whatwg-fetch'
import * as types from '../constants/ActionTypes'


const loadData = () => {
  return dispatch => {
    dispatch(loadDataRequest())
    return DashboardAPI.getEventsAttendees().then(

      json => dispatch(loadDataSuccess(json)),
      error => dispatch(loadDataFailure(error))
    )
  }
}
const loadDataRequest = () => {
  return {
    type: types.LOAD_DATA_REQUEST
  }
}
const loadDataSuccess = (data) => {
  return {
    type: types.LOAD_DATA_SUCCESS,
    data
  }
}
const loadDataFailure = (error) => {
  return {
    type: types.LOAD_DATA_FAILURE,
    error
  }
}
export const actions = {
  loadData
}