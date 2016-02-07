module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};
