var webpack = require ('webpack');
var UglifyJsPlugin = require ('uglifyjs-webpack-plugin');

var config = {
  mode: 'production',
  cache: true,
  entry: './src/index',
  output: {
    path: __dirname + '/dist',
    filename: 'dxp-questions.js',
    publicPath: 'http://localhost:3333/dist/',
    libraryTarget: 'var',
    library: 'DxpQuestions',
  },
  externals: {
    jquery: 'jQuery',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin ({
      'process.env': {
        NODE_ENV: JSON.stringify (process.env.NODE_ENV),
      },
    }),
    new webpack.ContextReplacementPlugin (/moment[\/\\]locale$/, /en-us/), // don't pull in all of the locales and make the file HUGE
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.optimization = {
    minimizer: [
      new UglifyJsPlugin ({
        uglifyOptions: {
          warnings: true,
        },
      }),
    ],
  };
}

module.exports = config;
