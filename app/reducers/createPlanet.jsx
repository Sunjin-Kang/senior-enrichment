import axios from 'axios';

//action types

const CREATE_PLANET = 'CREATE_PLANET';

//action creators

export function createPlanetAction (newPlanet) {
  const action = {
    type: CREATE_PLANET, newPlanet
  };
  return action;
}

//thunks

export function createPlanet(newPlanet) {
  return function thunk(dispatch) {
    return axios.post(`/api/planets`, {newPlanet})
      .then(res => res.data)
      .then(() => {
        const action = createPlanetAction(newPlanet)
        dispatch(action)
      })
  }
}

//reducer

export default function reducer (state = [], action) {

  switch (action.type) {
    case CREATE_PLANET:
      return Object.assign({}, state, {planets: [...state.planets, action.newPlanet]})
    default:
      return state;
  }
}
