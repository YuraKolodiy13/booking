import {
  CHANGE_CURRENT_CITY,
  FETCH_CITIES_ERROR,
  FETCH_CITIES_START,
  FETCH_CITIES_SUCCESS,
  FETCH_CITY_ERROR,
  FETCH_CITY_START,
  FETCH_CITY_SUCCESS, FETCH_REVIEWS_ERROR,
  FETCH_REVIEWS_START,
  FETCH_REVIEWS_SUCCESS
} from "../actions/actionType";

const initialState = {
  cities: [],
  city: {},
  currentCity: '',
  citiesInd: [],
  reviews: [],
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
      let firstRandomCity = Array.from(new Set(action.payload.map(item => item.city.name)))[Math.floor(Math.random() * Array.from(new Set(action.payload.map(item => item.city.name))).length)];
      return{
        ...state,
        cities: action.payload,
        citiesInd: Array.from(new Set(action.payload.map(item => item.city.name))).sort(),
        currentCity: state.currentCity
          ? state.currentCity
          : firstRandomCity,
        loading: false,
        location: action.payload.filter(item => item.city.name === (state.currentCity ? state.currentCity : firstRandomCity)),
      };
    case FETCH_CITIES_ERROR:
      return{
        ...state,
        error: action.error,
        loading: false
      };

    case FETCH_CITY_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_CITY_SUCCESS:
      return {
        ...state,
        city: action.payload,
        loading: false
      };
    case FETCH_CITY_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case FETCH_REVIEWS_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.payload,
        loading: false
      };
    case FETCH_REVIEWS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case CHANGE_CURRENT_CITY:
      return{
        ...state,
        currentCity: action.payload,
        location: state.cities.filter(item => item.city.name === action.payload),
        loading: false
      };

    default:
      return state
  }
};

export default cities;