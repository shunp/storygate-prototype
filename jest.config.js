module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/test'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/test/__mocks__/styleMock.js',
    '^src/(.*)': '<rootDir>/src/$1',
    '^test/(.*)': '<rootDir>/test/$1'
  },
  globals: {
    __PATH_PREFIX__: ``,
    'ts-jest': {
      diagnostics: false
    }
  },
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.[jt]sx?$': `<rootDir>/jest-preprocess.js`
  },
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/test/setupEnzyme.ts']
}
