const initialState = {
  currentPage: 1,
};

export const currentPage = (state = initialState, action) => {
  if (action.type === "SET_CURRENT_PAGE") {
    return {
      ...state,
      currentPage: action.payload,
    };
  }
  return state;
};
