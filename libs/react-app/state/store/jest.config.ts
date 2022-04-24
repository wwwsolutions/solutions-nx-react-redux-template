module.exports = {
  displayName: 'react-app-state-store',

  transform: {
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      { cwd: __dirname, configFile: './babel-jest.config.json' },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/react-app/state/store',
  preset: '../../../../jest.preset.ts',
};
