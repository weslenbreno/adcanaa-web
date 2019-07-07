const { override, addLessLoader, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin('babel-plugin-styled-components'),
  addLessLoader({
    javascriptEnabled: true,
  }),
);
