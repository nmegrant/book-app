export const initialState = [
  {
    id: 1,
    title: "The Demon-Haunted World",
    author: "Carl Sagan",
    description:
      "The Demon-Haunted World: Science as a Candle in the Dark is a 1995 book by the astrophysicist Carl Sagan, in which the author aims to explain the scientific method to laypeople and to encourage people to learn critical and skeptical thinking.",
    genre: ["Science", "Non-fic"],
    price: 12.0,
    stock: 2,
    rating: 5,
  },
  {
    id: 2,
    title: "The Fellowship of the Ring",
    author: "J. R. R. Tolkien",
    description:
      "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.",
    genre: ["Fantasy"],
    price: 15.0,
    stock: 3,
    rating: 5,
  },
];

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
