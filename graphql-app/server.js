const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./data/schema');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const app = express();

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  publicPath: '/static/',
  noInfo: true,
  stats: {
    color: true,
  },
}));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.use('/static', express.static('static'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.listen(3000);
console.log('The App Server is running');
