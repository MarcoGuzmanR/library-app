const express = require('express');
const path    = require('path');
const bodyParser = require('body-parser');
const router  = express.Router();

// Set up Express app
const app = express();

app.use( express.static( path.join(__dirname + '/public')) );

// Get data config for Post
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

app.set( 'views', path.join(__dirname, '/public/views') );
app.set( 'view engine', 'ejs' );

// Routes
router.get('/', ( req, res ) => {
  res.render( 'index', { title: 'Library' } );
});


app.use( '/', router );

app.listen( 3000, () => {
  console.log( 'Running on PORT 3000' );
});
