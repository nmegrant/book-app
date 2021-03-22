export const initialState = [];

export function checkoutReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const checkForbookIndex = state.findIndex(
        (stateBook) => stateBook.title === action.payload.title
      );

      if (checkForbookIndex !== -1) {
        const newState = [...state];
        newState[checkForbookIndex].quantity =
          newState[checkForbookIndex].quantity + 1;
        return [...newState];
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case "REMOVE":
      const newState = [...state].map((book) => {
        if (book.title === action.payload.title) {
          return { ...book, quantity: book.quantity - 1 };
        }
        return book;
      });
      const finalState = [...newState].filter((book) => book.quantity > 0);
      return [...finalState];
    default:
      return state;
  }
}
