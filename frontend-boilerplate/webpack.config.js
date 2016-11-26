module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: '/build',
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    contentBase: './',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
};
