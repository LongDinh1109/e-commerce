import * as actionTypes from '../constants/actionTypes';

const initialState = { isLoading: true, list: [] };

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.START_LOADING:
      return { ...state, isLoading: true };

    case actionTypes.END_LOADING:
      return { ...state, isLoading: false };

    case actionTypes.CATEGORY.GET_ALL:
      return { ...state, list: payload.data };

    case actionTypes.CATEGORY.GET_ONE:
      return { ...state, item: payload };

    case actionTypes.CATEGORY.CREATE:
      return { ...state, list: [payload, ...state.list] };

    case actionTypes.CATEGORY.UPDATE:
      return {
        ...state,
        list: state.list.map((post) => (post._id === payload._id ? payload : post))
      };

    case actionTypes.CATEGORY.DELETE:
      return { ...state, list: state.list.filter((post) => post._id !== payload._id) };

    default:
      return state;
  }
};

export default categoriesReducer;
