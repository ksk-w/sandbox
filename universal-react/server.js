import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import { routes } from './src/routes'

const app = express();


const PORT = 3000

app.set('views', __dirname);
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('*', (req, res) => {
  match({routes, location: req.url}, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search)
    } else if (props) {
      let markup = renderToString(<RoutingContext {...props} />)
      res.render('index', {markup});
    } else {
      res.sendStatus(404)
    }
  })
});

const server = app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
