import {combineReducers} from 'redux';

const INITIAL_STATE = {
  data: '',
};

const Reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_DETAILS':
      const addedDetails = action.payload;

      return addedDetails;

    default:
      return state;
  }
};

export default combineReducers({
  details: Reducers,
});
