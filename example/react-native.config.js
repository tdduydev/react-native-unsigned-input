const path = require('path');
const pak = require('../package.json');

module.exports = {
  dependencies: {
    [pak.name]: {
      root: path.join(__dirname, '..'),
    },
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
};
