export const initialState = [];

export function checkoutReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return [...state, action.payload];
    default:
      return state;
  }
}
