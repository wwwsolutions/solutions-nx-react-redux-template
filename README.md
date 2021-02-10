# Template project

__**Redux Nx monorepo architecture**__

`Nx monorepo, Typescript, React, Redux`

---

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

### Generating folder structure

Run `mkdir libs/redux-app && mkdir libs/redux-app/state` to create a directory named `store` to hold all state management relevant code.

### Generating React application

**`./apps/redux-app`** & **`./apps/redux-app-e2e`**

```javascript
nx generate @nrwl/react:application --name=redux-app --style=none --globalCss --no-interactive
```

### Generating corresponding state management libraries | React

**`./libs/redux-app/state/store`**

```javascript
nx generate @nrwl/react:library --name=store --directory=redux-app/state --appProject=redux-app --no-component --importPath=@redux/store --no-interactive
```

**`./libs/redux-app/state/reducers`**

```javascript
nx generate @nrwl/react:library --name=reducers --directory=redux-app/state --appProject=redux-app --no-component --importPath=@redux/reducers --no-interactive
```

**`./libs/redux-app/state/action-creators`**

```javascript
nx generate @nrwl/react:library --name=action-creators --directory=redux-app/state --appProject=redux-app --no-component --importPath=@redux/action-creators --no-interactive
```

Run `` to generate a new React library.

**`./libs/redux-app/state/hooks`**

```javascript
nx generate @nrwl/react:library --name=hooks --directory=redux-app/state --appProject=redux-app --no-component --importPath=@redux/hooks --no-interactive
```

### Generating corresponding application libraries | React

**`./libs/redux-app/components`**

```javascript
nx generate @nrwl/react:library --name=components --directory=redux-app --appProject=redux-app --no-component --importPath=@redux-app/components --no-interactive
```

### Generating corresponding state management libraries | Typescript

**`./libs/redux-app/store/action-types`**

```javascript
nx generate @nrwl/workspace:library --name=action-types --directory=redux-app/state --importPath=@redux/action-types --unitTestRunner=none --no-interactive
```

**`./libs/redux-app/store/actions`**

```javascript
nx generate @nrwl/workspace:library --name=actions --directory=redux-app/state --importPath=@redux/actions --unitTestRunner=none --no-interactive
```

### Generating React components

**`./libs/redux-app/components/src/lib/demo-list`**

```javascript
nx generate @nrwl/react:component --name=demo-list --project=redux-app-components --export --globalCss --no-interactive
```
