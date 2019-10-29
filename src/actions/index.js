import {
  CHANGE_CURRENT_CITY,
  FETCH_CITIES_ERROR,
  FETCH_CITIES_START,
  FETCH_CITIES_SUCCESS, FETCH_CITY_ERROR,
  FETCH_CITY_START, FETCH_CITY_SUCCESS, FETCH_REVIEWS_ERROR, FETCH_REVIEWS_START, FETCH_REVIEWS_SUCCESS
} from "./actionType";
import {fetchCitiesApi} from "../api/index";
import {fetchReviewsApi} from "../api";

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
export const fetchCity = cityId => {
  return async dispatch => {
    dispatch({
      type: FETCH_CITY_START
    });

    try {
      let city = await fetchCitiesApi();
      city = city.find(item => item.id === +cityId);
      dispatch({
        type: FETCH_CITY_SUCCESS,
        payload: city
      })

    } catch (e) {
      dispatch({
        type: FETCH_CITY_ERROR,
        payload: e,
        error: true
      });
    }
  }
};

export const fetchReviews = reviewsId => {
  return async dispatch => {
    dispatch({
      type: FETCH_REVIEWS_START
    });

    try {
      const reviews = await fetchReviewsApi(reviewsId);
      dispatch({
        type: FETCH_REVIEWS_SUCCESS,
        payload: reviews
      })

    } catch (e) {
      dispatch({
        type: FETCH_REVIEWS_ERROR,
        payload: e,
        error: true
      });
    }
  }
};

export const changeCurrentCity = currentCity => {
  return{
    type: CHANGE_CURRENT_CITY,
    payload: currentCity
  }
};