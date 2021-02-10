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

Run `nx generate @nrwl/react:library --name=store --directory=redux-app/state --appProject=redux-app --no-component --importPath=@redux/store --no-interactive` to generate a new React library.

Run `nx generate @nrwl/react:library --name=reducers --directory=redux-app/state --appProject=redux-app --no-component --importPath=@redux/reducers --no-interactive` to generate a new React library.

Run `nx generate @nrwl/react:library --name=action-creators --directory=redux-app/state --appProject=redux-app --no-component --importPath=@redux/action-creators --no-interactive` to generate a new React library.

Run `nx generate @nrwl/react:library --name=hooks --directory=redux-app/state --appProject=redux-app --no-component --importPath=@redux/hooks --no-interactive` to generate a new React library.

Run `nx generate @nrwl/react:library --name=components --directory=redux-app --appProject=redux-app --no-component --importPath=@redux-app/components --no-interactive` to generate a new React library.

#### Workspace libraries

Run `nx generate @nrwl/workspace:library --name=action-types --directory=redux-app/state --importPath=@redux/action-types --unitTestRunner=none --no-interactive` to generate a new Workspace library.

Run `nx generate @nrwl/workspace:library --name=actions --directory=redux-app/state --importPath=@redux/actions --unitTestRunner=none --no-interactive` to generate a new Workspace library.

Run `nx g @nrwl/workspace:lib actions --project=redux` to generate a new Workspace library.

### Generating React components

Run `nx generate @nrwl/react:component --name=demo-list --project=redux-app-components --export --globalCss --no-interactive` to generate a new component.
