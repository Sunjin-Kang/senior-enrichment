import axios from 'axios';

//action types

const DESTROY_PLANET = 'DESTROY_PLANET';

//action creators

export function destroyPlanetAction (planetId) {
  const action = {
    type: DESTROY_PLANET, planetId
  };
  return action;
}

//thunks

export function destroyPlanet(planetId) {
  return function thunk(dispatch) {
    return axios.delete(`/api/planets/${planetId}`)
      .then(res => res.data)
      .then(() => {
        const action = destroyPlanetAction(Number(planetId))
        dispatch(action)
      })
  }
}

//reducer

export default function reducer (state = [], action) {

  switch (action.type) {
    case DESTROY_PLANET:
      return Object.assign({}, state, {planets: state.planets.filter(planet => planet.id !== action.planetId)})
    default:
      return state;
  }
}
