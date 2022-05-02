const initialState = {
  items: [],
};

export const characters = (state = initialState, action) => {
  if (action.type === "SET_CHARACTERS") {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};
