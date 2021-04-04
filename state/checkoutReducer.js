export const initialState = {
  books: [],
  userInfo: { name: "", email: "", street: "", postalcode: "", country: "" },
};

export function checkoutReducer(state, action) {
  switch (action.type) {
    case "ADD_BOOK":
      const checkForbookIndex = state.books.findIndex(
        (stateBook) => stateBook.title === action.payload.title
      );

      if (checkForbookIndex !== -1) {
        const newState = [...state.books];
        newState[checkForbookIndex].quantity =
          newState[checkForbookIndex].quantity + 1;
        return { ...state, books: [...newState] };
      }
      return {
        ...state,
        books: [...state.books, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_BOOK":
      const newState = [...state.books].map((book) => {
        if (book.title === action.payload.title) {
          return { ...book, quantity: book.quantity - 1 };
        }
        return book;
      });
      const finalState = [...newState].filter((book) => book.quantity > 0);
      return { state, books: [...finalState] };
    case "ADD_USERINFO":
      return {
        ...state,
        userInfo: { ...action.payload },
      };
    default:
      return state;
  }
}
