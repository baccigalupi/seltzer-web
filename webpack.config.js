const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let config = {
  mode: 'development',
  entry: './css.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'seltzer.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "seltzer.css",
      chunkFilename: "[id].css"
    })
  ]
}

module.exports = config
