const genres = [
  "Science",
  "Fantasy",
  "Science Fiction",
  "History",
  "Non-Fiction",
];

export default function handler(req, res) {
  res.status(200).json(genres);
}
