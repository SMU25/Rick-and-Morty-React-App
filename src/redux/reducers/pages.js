const initialState = {
  pages: 1,
};

export const pages = (state = initialState, action) => {
  if (action.type === "SET_PAGES") {
    return {
      ...state,
      pages: action.payload,
    };
  }
  return state;
};
