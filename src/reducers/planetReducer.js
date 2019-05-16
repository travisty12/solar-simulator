import constants from './../constants';
const {types, initialState} = constants

const planetReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case types.UPDATE_PLANET:
      newState = state;
        newState = action.planet;
      return newState;
    default:
      return state;
  }
}

export default planetReducer;
