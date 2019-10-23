import {CHANGE_CURRENT_CITY, FETCH_CITIES_ERROR, FETCH_CITIES_START, FETCH_CITIES_SUCCESS} from "./actionType";
import {fetchCitiesApi} from "../api/index";

export const fetchCities = () => async dispatch => {
  dispatch({
    type: FETCH_CITIES_START
  });

  try {
    const cities = await fetchCitiesApi();
    dispatch({
      type: FETCH_CITIES_SUCCESS,
      payload: cities
    })

  }catch (e) {
    dispatch({
      type: FETCH_CITIES_ERROR,
      payload: e,
      error: true
    });
  }
};

export const changeCurrentCity = currentCity => {
  return{
    type: CHANGE_CURRENT_CITY,
    payload: currentCity
  }
};