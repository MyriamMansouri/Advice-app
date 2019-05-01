const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')

const hbs = require( 'express-handlebars')

const router = require('./routes')

const port = process.env.PORT || 3000

const app = express();
app.use(favicon(path.join(__dirname, '..','public', 'favicon.ico')))
app.use(express.static('public'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine( 'hbs', hbs( {
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: './src/views/layouts/',
  partialsDir: './src/views/partials/'
}));

// app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
