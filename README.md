# Redux sample architecture

Nx monorepo, Typescript, React, Redux

## Adding capabilities to your workspace

### Dependencies

- [Redux](https://www.npmjs.com/package/redux)
  - `npm install --save redux`
- [React Redux](https://www.npmjs.com/package/react-redux)
  - `npm install --save react-redux`
- [Redux Thunk](https://www.npmjs.com/package/redux-thunk)
  - `npm install --save redux-thunk`
- [Axios](https://www.npmjs.com/package/axios)
  - `npm install --save axios`

### Dev dependencies

- [React Plugin for Nx](https://www.npmjs.com/package/@nrwl/react)
  - `npm install --save-dev @nrwl/react`
- [Redux DevTools Extension](https://www.npmjs.com/package/redux-devtools-extension)
  - `npm install --save-dev redux-devtools-extension`
- [React Redux Type Definition](https://www.npmjs.com/package/@types/react-redux)
  - `npm install --save-dev @types/react-redux`


## Code scaffolding for a demo app `'redux-app'`

### Generating file structure

Run `mkdir libs/redux-app && mkdir libs/redux-app/state` to tweak a monorepo file structure.

### Generating React application

Run `nx generate @nrwl/react:application --name=redux-app --style=none --globalCss --no-interactive` to generate a new application.

### Generating corresponding libraries

#### React libraries

Run `nx g @nrwl/react:lib store --project=redux` to generate a new React library.

Run `nx g @nrwl/react:lib reducers --project=redux` to generate a new React library.

Run `nx g @nrwl/react:lib action-creators --project=redux` to generate a new React library.

Run `nx g @nrwl/react:lib hooks --project=redux` to generate a new React library.

#### Workspace libraries

Run `nx g @nrwl/workspace:lib action-types --project=redux` to generate a new Workspace library.

Run `nx g @nrwl/workspace:lib actions --project=redux` to generate a new Workspace library.

### Generating React components

Run `nx g @nrwl/react:component demo-component --project=redux` to generate a new component.
