const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/theGrid.js',
  mode: 'production',
  plugins: [
   new webpack.DefinePlugin({
     'process.env.NODE_ENV': '"production"'
    }),
],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
  extensions: [".js", ".jsx", "*"]
}
};
