module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: "coverage",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  coveragePathIgnorePatterns: ["./lib", "./test", "./node_modules"]
};