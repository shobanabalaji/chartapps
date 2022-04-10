import HOME from "./constants";

const initalState = {
  homeData: [],
};

const homeReducer = (state = initalState, action) => {
  switch (action.type) {
    case HOME.LOAD:
      return {
        ...state,
      };
    case HOME.LOAD_SUCCESS:
      return {
        ...state,
        homeData: action.homeData,
      };
    default:
      return state;
  }
};

export default homeReducer;
