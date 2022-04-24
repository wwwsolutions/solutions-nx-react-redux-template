module.exports = {
  displayName: 'react-app-state-action-creators',

  transform: {
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      { cwd: __dirname, configFile: './babel-jest.config.json' },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../coverage/libs/react-app/state/action-creators',
  preset: '../../../../jest.preset.ts',
};
