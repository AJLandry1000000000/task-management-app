module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts'],
    moduleFileExtensions: ['ts', 'js'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    setupFiles: ['dotenv/config'],
    setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  };