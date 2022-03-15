/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const local = require('./webpack.local');

module.exports = merge(local, {
  entry: {
    index: {
      import: './src/TestMicroFrontend.tsx',
      dependOn: 'shared',
    },
    shared: ['react-dom', 'react'],
  },
});
