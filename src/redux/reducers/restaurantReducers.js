import actionTypes from "../actionTypes";

// state in başlangıç değeri
const initalState = {
  retaurants: [],
  ilLoading: false,
  error: null,
};

const restaurantReducers = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.REST_LOADING:
      return { ...state, isLoading: true };

    case actionTypes.REST_ERROR:
      return { ...state, isLoading: false, error: action.payload.message };
    case actionTypes.REST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        restaurants: action.payload,
      };

    default:
      return state;
  }
};

export default restaurantReducers;
