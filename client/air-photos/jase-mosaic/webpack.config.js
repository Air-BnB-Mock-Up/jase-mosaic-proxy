const path = require('path');
const entry = path.join(__dirname, '/client/src/components/index.jsx');
const output = path.join(__dirname, '/client/dist');

module.exports = {
  entry: entry,
  output: {
    filename: 'bundle.js',
    path: output
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  },
  plugins: 'babel-jest'
}