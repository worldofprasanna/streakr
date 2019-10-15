module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.(js|jsx)?$": "babel-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/app/javascript/$1"
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "<rootDir>/(app/javascript/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))"
  ],
  testURL: "http://localhost/",
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
};