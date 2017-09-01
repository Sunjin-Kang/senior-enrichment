import { combineReducers } from 'redux';
import getPlanets from './getPlanets';
import getStudents from './getStudents';

const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     case 'type':
//       return {

//       }
//     default: return state
//   }
// };

const rootReducer = combineReducers({
  planets: getPlanets,
  students: getStudents
})

export default rootReducer

//export action creators
export * from './getStudents';
export * from './getPlanets';
export * from './expelStudent';
export * from './destroyPlanet';
export * from './enrollStudent';
export * from './createPlanet';


