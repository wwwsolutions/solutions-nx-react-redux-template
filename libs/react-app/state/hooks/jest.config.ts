module.exports = {
  displayName: 'react-app-state-hooks',

  transform: {
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      { cwd: __dirname, configFile: './babel-jest.config.json' },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/react-app/state/hooks',
  preset: '../../../../jest.preset.ts',
};
