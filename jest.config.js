module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!react-native-splash-screen)/'
  ],
  setupFilesAfterEnv: ['./jest.setup.js']
};
