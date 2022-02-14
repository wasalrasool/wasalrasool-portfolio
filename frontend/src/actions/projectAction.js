import axios from "axios";

import {
  CLEAR_ERRORS,
  ALL_PROJECT_FAIL,
  ALL_PROJECT_REQUEST,
  ALL_PROJECT_SUCCESS,
} from "../constansts/productConstants";

// Get All Products
export const getProducts = async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });

    let link = `/api/v1/projects`;

    const { data } = await axios.get(link);

    dispatch({
      type: ALL_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};
