const path = require('path');

const SRC_DIR = path.join(__dirname, 'client');
const OUT_DIR = path.join(__dirname, 'public');

module.exports = {
  entry: path.join(SRC_DIR, 'index.js'),
  mode: 'development',
  output: {
    path: OUT_DIR,
    filename: 'main.js'
  },
  watch: false,
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'style-loader',
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         esModule: false
      //       }
      //     },
      //     'css-loader',
      //     'sass-loader'
      //   ]
      // }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};