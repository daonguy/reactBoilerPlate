
import * as types from '../constants/ActionTypes'

const getInitialState = () =>{
  return {
  	data: {},
  	isLoading: false
  }
};

const initialState = getInitialState();

const HomeData = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_DATA_FAILURE:
      return Object.assign({}, state, {
          error: action.error,
          isLoading: false
        })
    case types.LOAD_DATA_SUCCESS:
      return Object.assign({}, state, {
          data: action.data,
          isLoading: false
        })
    case types.LOAD_DATA_REQUEST:
      return Object.assign({}, state, {
          isLoading: true
        })
    
    default:
      return state
  }
}

module.exports = HomeData
