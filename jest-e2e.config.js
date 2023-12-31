/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: ".",
  testRegex: ".e2e.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  }
};