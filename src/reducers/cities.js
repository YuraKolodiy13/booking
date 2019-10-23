import {
  CHANGE_CURRENT_CITY,
  FETCH_CITIES_ERROR,
  FETCH_CITIES_START,
  FETCH_CITIES_SUCCESS
} from "../actions/actionType";

const initialState = {
  cities: [],
  currentCity: '',
  citiesInd: [],
  loading: true
};

const cities = (state = initialState, action) => {
  switch (action.type){
    case FETCH_CITIES_START:
      return{
        ...state,
        loading: true
      };
    case FETCH_CITIES_SUCCESS:
      return{
        ...state,
        cities: action.payload,
        citiesInd: Array.from(new Set(action.payload.map(item => item.city.name))).sort(),
        currentCity: state.currentCity
          ? state.currentCity
          : Array.from(new Set(action.payload.map(item => item.city.name)))[Math.floor(Math.random() * Array.from(new Set(action.payload.map(item => item.city.name))).length)],
        loading: false
      };
    case FETCH_CITIES_ERROR:
      return{
        ...state,
        error: action.error,
        loading: false
      };

    case CHANGE_CURRENT_CITY:
      return{
        ...state,
        currentCity: action.payload,
        loading: false
      };

    default:
      return state
  }
};

export default cities;