var books = [
  {
    id: 1,
    name: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    category_id: 1,
    publishedDate: new Date('2016-08-30T16:11:21.360Z').getTime(),
    user: 'John Doe',
    available: false
  },
  {
    id: 2,
    name: 'Robinson Crusoe',
    author: 'Daniel Defoe',
    category_id: 2,
    publishedDate: new Date('2016-07-10T11:11:21.360Z').getTime(),
    user: 'Jack Shepard',
    available: false
  },
  {
    id: 3,
    name: 'White Fang',
    author: 'Jack London',
    category_id: 2,
    publishedDate: new Date('2008-12-01T01:11:21.360Z').getTime(),
    user: 'Patrick Jackson',
    available: false
  },
  {
    id: 4,
    name: "Harry Potter and The Sorcerer's Stone",
    author: 'JK Rowling',
    category_id: 3,
    publishedDate: new Date('2001-11-09T18:11:21.360Z').getTime(),
    user: '',
    available: true
  },
  {
    id: 5,
    name: 'Sandokan',
    author: 'Emilio Salgary',
    category_id: 2,
    publishedDate: Date.now(),
    publishedDate: new Date('2011-08-19T08:11:21.360Z').getTime(),
    user: '',
    available: true
  },
  {
    id: 6,
    name: 'A Brief Story of Time',
    author: 'Stephen Hawking',
    category_id: 4,
    publishedDate: new Date('2017-01-09T07:11:21.360Z').getTime(),
    user: 'John Doe',
    available: false
  },
  {
    id: 7,
    name: 'A Storm of Swords',
    author: 'George RR Martin',
    category_id: 3,
    publishedDate: Date.now(),
    publishedDate: new Date('2011-05-04T17:11:21.360Z').getTime(),
    user: 'Teresa Smith',
    available: false
  },
  {
    id: 8,
    name: 'Moby Dick',
    author: 'Herman Melville',
    category_id: 2,
    publishedDate: new Date('2007-07-24T19:11:21.360Z').getTime(),
    user: '',
    available: true
  },
  {
    id: 9,
    name: 'Pride and Prejuice',
    author: 'Jane Austen',
    category_id: 1,
    publishedDate: new Date('2010-10-22T22:11:21.360Z').getTime(),
    user: 'Peter Brown',
    available: false
  },
  {
    id: 10,
    name: 'The Time Machine',
    author: 'HG Wells',
    category_id: 5,
    publishedDate: new Date('2010-02-28T02:11:21.360Z').getTime(),
    user: '',
    available: true
  },
  {
    id: 11,
    name: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    category_id: 3,
    publishedDate: new Date('2005-09-04T07:11:21.360Z').getTime(),
    user: 'Maria Parker',
    available: false
  },
  {
    id: 12,
    name: 'The Good Soldier',
    author: 'Ford Madox',
    category_id: 1,
    publishedDate: new Date('2015-04-08T12:11:21.360Z').getTime(),
    user: '',
    available: true
  },
  {
    id: 13,
    name: 'From the Moon to the Earth',
    author: 'Jules Verne',
    category_id: 2,
    publishedDate: new Date('2014-03-09T13:11:21.360Z').getTime(),
    user: 'John Locke',
    available: false
  },
  {
    id: 14,
    name: 'The Hobbit',
    author: 'JRR Tolkien',
    category_id: 3,
    publishedDate: new Date('2017-03-08T20:11:21.360Z').getTime(),
    user: '',
    available: true
  },
  {
    id: 15,
    name: 'Crash',
    author: 'JG Ballard',
    category_id: 1,
    publishedDate: new Date('1990-03-28T13:11:21.360Z').getTime(),
    user: '',
    available: true
  }
];

exports.allBooks = books;
