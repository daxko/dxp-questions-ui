var webpack = require('webpack');

var config = {
  cache: true,
  entry: './src/index',
  output: {
    path: __dirname + '/dist',
    filename: 'dxp-questions.js',
    publicPath: 'http://localhost:3333/dist/',
    libraryTarget: "var",
    library: "DxpQuestions"
  },
  externals: {
    'jquery': "jQuery"
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['react']
      }
    }
  ]
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-us/)  // don't pull in all of the locales and make the file HUGE
  ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true
            }
        })
    )
}

module.exports = config;
