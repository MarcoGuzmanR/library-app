const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path    = require('path');
const bodyParser = require('body-parser');
const router  = express.Router();
var   books   = require( './data/books.js' );

// Set up Express app
const app = express();

app.use( express.static( path.join(__dirname + '/public')) );

// Get data config for Post
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

app.set( 'views', path.join(__dirname, '/public/views') );
app.set( 'view engine', 'ejs' );

// Layout and block rendering
app.use( expressLayouts );

// Routes
router.get('/', ( req, res ) => {
  res.render( 'index', { title: 'Library' } );
});

// Index
router.get('/books', ( req, res ) => {
  res.json( { books: books.allBooks } );
});

// Create a book
router.post('/books', ( req, res ) => {
  let book = {
    id: books.allBooks.length + 1,
    name: req.body.name,
    author: req.body.author,
    category: req.body.category,
    publishedDate: Date.now(),
    user: req.body.user
  };

  books.allBooks.push( book );

  res.json( { books: books.allBooks });
});

// Get a book
router.get('/book/:id', ( req, res ) => {
  const book =
    books.allBooks.find( book => book.id === parseInt( req.params.id ) );

  res.json( { book } );
});

// Update a book
router.put('/book/:id', ( req, res ) => {
  let book =
    books.allBooks.find( book => book.id === parseInt( req.params.id ) );

  book.name = req.body.name;
  book.author = req.body.author;
  book.category = req.body.category;

  res.json( { books: books.allBooks });
});

// Delete a book
router.delete('/book/:id', ( req, res ) => {
  books.allBooks =
    books.allBooks.filter( book => book.id !== parseInt( req.params.id ) );

  res.json( { books: books.allBooks });
});

app.use( '/', router );

app.listen( 3000, () => {
  console.log( 'Running on PORT 3000' );
});
