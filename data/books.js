var books = [
  {
    id: 1,
    name: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    category: 'Drama',
    publishedDate: Date.now(),
    user: 'John Doe'
  },
  {
    id: 2,
    name: 'Robinson Crusoe',
    author: 'Daniel Dafoe',
    category: 'Adventure',
    publishedDate: Date.now(),
    user: 'Jack Shepard'
  },
  {
    id: 3,
    name: 'White Fang',
    author: 'Jack London',
    category: 'Adventure',
    publishedDate: Date.now(),
    user: 'Patrick Jackson'
  }
];

exports.allBooks = books;
