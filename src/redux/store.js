import { createStore } from 'redux';

const defaultState = {
    leadProfile: {}
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_ANSWER':
      return {
        ...state,
        leadProfile: {
          ...state.leadProfile,
          ...action.payload
        }
      }
    default:
      return state
  }
}

const store = createStore(reducers);

export default store;
