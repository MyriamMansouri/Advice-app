const express = require('express')
const hbs = require( 'express-handlebars')

const router = require('./routes')

const port = process.env.PORT || 3000

const app = express();

// view engine setup
app.set('view engine', 'hbs');

app.engine( 'hbs', hbs( {
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: './views/layouts/',
  partialsDir: './views/partials/'
}));

// app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
