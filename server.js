const express        = require('express');
const expressLayouts = require('express-ejs-layouts');
const path           = require('path');
const bodyParser     = require('body-parser');
const router         = express.Router();
var   books          = require( './data/books.js' );
const categories     = require( './data/categories.js' );

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

router.get('/', ( req, res ) => {
  res.render( 'index', { title: 'OB Library' } );
});

// Routes
router.get('/admin', ( req, res ) => {
  res.render( 'adminIndex', { title: 'Library', layout: 'adminLayout' } );
});

// Index for Books
router.get('/books', ( req, res ) => {
  res.json( { books: books.allBooks } );
});

// Create a book
router.post('/books', ( req, res ) => {
  let book = {
    id: books.allBooks.length + 1,
    name: req.body.name,
    author: req.body.author,
    category_id: req.body.category_id,
    publishedDate: req.body.publishedDate,
    user: req.body.user
  };

  if ( typeof book.publishedDate !== 'number' ) {
    book.publishedDate = new Date( book.publishedDate ).getTime();
  }

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

  book.name          = req.body.name;
  book.author        = req.body.author;
  book.category_id   = req.body.category_id;
  book.available     = req.body.available;
  book.publishedDate = new Date( req.body.publishedDate ).getTime();
  book.user          = req.body.user;

  res.json( { books: books.allBooks });
});

// Delete a book
router.delete('/book/:id', ( req, res ) => {
  books.allBooks =
    books.allBooks.filter( book => book.id !== parseInt( req.params.id ) );

  res.json( { books: books.allBooks });
});

// Index for Books
router.get('/categories', ( req, res ) => {
  res.json( { categories: categories.allCategories } );
});

app.use( '/', router );

app.listen( 3000, () => {
  console.log( 'Running on PORT 3000' );
});
