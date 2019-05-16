import constants from './../constants';
const {types} = constants;

export const updatePlanet = (planet) => ({
  type: types.UPDATE_PLANET,
  planet
})
