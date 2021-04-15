module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  testEnvironment: "jsdom",
  testRunner: "<rootDir>/node_modules/jest-circus/runner.js",  
  collectCoverageFrom: [
    "src/**/*.{js,jsx,mjs,ts,tsx}",
    "!src/**/*.d.ts"    
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/registerServiceWorker.ts',
    '<rootDir>/src/react-app-env.d.ts',
    '<rootDir>/src/window.d.ts',
  ],  
  setupFiles: ["react-app-polyfill/jsdom"],
  setupFilesAfterEnv: ['<rootDir>/scripts/setupTests.ts'],
  testMatch: [
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}",
    '<rootDir>/__tests__/**/*.{js,ts,tsx,jsx,mjs}',
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/?(*.)(spec|test).{js,jsx,ts,tsx,mjs}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/__tests__/**/*.{js,ts,tsx,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,ts,tsx,jsx,mjs}',
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"    
  ],
  testURL: "http://localhost",
  transform: {
    "^(?!.*\\.(js|jsx|mjs|css|json)$)":
    "<rootDir>/config/jest/fileTransform.js",
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/config/jest/babelTransform.js",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"    
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"    
  },
  moduleFileExtensions: [
    "web.js",
    "web.ts",
    "js",
    "ts",
    "json",
    "web.jsx",
    "web.tsx",
    "jsx",
    "tsx",
    "node",
    "mjs",
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  resetMocks: true  
};
