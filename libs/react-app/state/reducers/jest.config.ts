module.exports = {
  displayName: 'react-app-state-reducers',

  transform: {
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      { cwd: __dirname, configFile: './babel-jest.config.json' },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/react-app/state/reducers',
  preset: '../../../../jest.preset.ts',
};
