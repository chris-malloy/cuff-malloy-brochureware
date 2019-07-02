const path = require('path');

// NOTE: Not used by Vue itself. This just makes IntelliJ happy.

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue', '.ts'],
    root: path.resolve(__dirname),
    alias: {
      '@': path.resolve('./src'),
      '~': path.resolve('./src'),
    },
  },
};
