const books = [
  {
    id: 1,
    title: "The Demon-Haunted World",
    author: "Carl Sagan",
    description: "",
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
  {
    id: 3,
    title: "Consider Phlebas",
    author: "Iain M. Banks",
    description:
      "Consider Phlebas, first published in 1987, is a space opera novel by Scottish writer Iain M. Banks. It is the first in a series of novels about an interstellar post-scarcity society called the Culture.",
    genre: ["Science Fiction"],
    price: 18.0,
    stock: 0,
    rating: 4,
  },
  {
    id: 4,
    title: "Homage to Catalonia",
    author: "George Orwell",
    description:
      "Homage to Catalonia is George Orwell's personal account of his experiences and observations fighting for the POUM militia of the Republican army during the Spanish Civil War.",
    genre: ["History", "Non-Fiction"],
    price: 13.0,
    stock: 1,
    rating: 5,
  },
  {
    id: 5,
    title: "Men at Arms",
    author: "Terry Pratchett",
    description:
      "Men at Arms is a fantasy novel by British writer Terry Pratchett, the 15th book in the Discworld series, first published in 1993. It is the second novel about the Ankh-Morpork City Watch on the Discworld.",
    genre: ["Fantasy"],
    price: 10.0,
    stock: 3,
    rating: 5,
  },
];

export default function handler(req, res) {
  const { bookId } = req.query;
  const book = books.find((book) => {
    return book.id.toString() === bookId;
  });
  return res.status(200).json(book);
}
