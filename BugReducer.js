import { combineReducers } from 'redux';
/* import { ADD_BUG } from './types';
 */import { addBug } from './BugActions';

const INITIAL_STATE = {
  current: [],
  possible: [
    'Grasshopper',
    'Mayfly',
    'Blue Winged Olive',
    'Worm',
  ],
};

const bugReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_BUG':
      const {
          current,
          possible,
      } = state;
      const addedBug = possible.splice(action.payload, 1);
      current.push(addedBug);
      const newState = { current, possible };
    return newState; 
      
    default:
      return state;
  }
};

export default combineReducers({
  bugs: bugReducer,
});