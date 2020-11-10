var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "app"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/App.js",
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test    : /\.(png|jpg|svg)$/,
        include : path.join(__dirname, 'app/src/images'),
        loader  : 'url-loader?limit=30000&name=images/[name].[ext]'
      },
    ]
  },
  output: {
    path: __dirname + "/app/build/",
    filename: "app.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
