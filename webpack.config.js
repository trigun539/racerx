const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlConfig = new HtmlWebpackPlugin({
  title: 'RacerX',
  template: './index.ejs'
})

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [htmlConfig],
  devtool: 'inline-source-map'
}
