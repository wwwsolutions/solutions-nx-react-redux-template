const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/react-app',
    '<rootDir>/libs/react-app/state/store',
    '<rootDir>/libs/react-app/state/reducers',
    '<rootDir>/libs/react-app/state/action-creators',
    '<rootDir>/libs/react-app/state/hooks',
    '<rootDir>/libs/react-app/components',
  ],
};
