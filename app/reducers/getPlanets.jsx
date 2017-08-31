import axios from 'axios';
import socket from '../socket';


//action types

const GET_PLANETS = 'GET_PLANETS';

//action creators

export function getPlanets (planets) {
  const action = {
    type: GET_PLANETS, planets
  };
  return action;
}

//thunks

export function fetchPlanets() {
  return function thunk(dispatch) {
    return axios.get('/api/planets')
      .then(res => res.data)
      .then(planets => {
        const action = getPlanets(planets)
      })
  }
}

//reducer

export default function reducer (state = [], action) {

  switch (action.type) {
    case GET_PLANETS:
      return action.planets
    default:
      return state;

  }
}
