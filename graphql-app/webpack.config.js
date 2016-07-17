module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname + '/static',
    filename: "bundle.js",
    publicPath: "/static",
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: "babel",
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    contentBase: '/static',
  },
};
