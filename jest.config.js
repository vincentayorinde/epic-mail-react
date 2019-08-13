const { defaults } = require('jest-config');

module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/cypress/', '/src/tests/e2e'],
  testEnvironment: 'jsdom',
  verbose: true,
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|gif|ttf|otf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'scss', 'js', 'yml'],
  setupFilesAfterEnv: ['./src/setupTest/setupTest.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coveragePathIgnorePatterns: ['/src/utils/'],
};
