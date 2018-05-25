const path = require('path');

module.exports = {
  entry: './src/theGrid.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
  extensions: [".js", ".jsx", "*"]
}
};
