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

## Code scaffolding for a demo app `'react-app'`

### Generating folder structure

Run `mkdir libs/react-app && mkdir libs/react-app/state` to create a directory named `store` to hold all state management relevant code.

### Generating React application

**`./apps/react-app`** & **`./apps/react-app-e2e`**

```javascript
nx generate @nrwl/react:application --name=react-app --style=none --globalCss --no-interactive
```

### Generating corresponding state management libraries | React

**`./libs/react-app/state/store`**

```javascript
nx generate @nrwl/react:library --name=store --directory=react-app/state --appProject=react-app --no-component --importPath=@redux/store --no-interactive
```

**`./libs/react-app/state/reducers`**

```javascript
nx generate @nrwl/react:library --name=reducers --directory=react-app/state --appProject=react-app --no-component --importPath=@redux/reducers --no-interactive
```

**`./libs/react-app/state/action-creators`**

```javascript
nx generate @nrwl/react:library --name=action-creators --directory=react-app/state --appProject=react-app --no-component --importPath=@redux/action-creators --no-interactive
```

Run `` to generate a new React library.

**`./libs/react-app/state/hooks`**

```javascript
nx generate @nrwl/react:library --name=hooks --directory=react-app/state --appProject=react-app --no-component --importPath=@redux/hooks --no-interactive
```

### Generating corresponding application libraries | React

**`./libs/react-app/components`**

```javascript
nx generate @nrwl/react:library --name=components --directory=react-app --appProject=react-app --no-component --importPath=@react-app/components --no-interactive
```

### Generating corresponding state management libraries | Typescript

**`./libs/react-app/store/action-types`**

```javascript
nx generate @nrwl/workspace:library --name=action-types --directory=react-app/state --importPath=@redux/action-types --unitTestRunner=none --no-interactive
```

**`./libs/react-app/store/actions`**

```javascript
nx generate @nrwl/workspace:library --name=actions --directory=react-app/state --importPath=@redux/actions --unitTestRunner=none --no-interactive
```

### Generating React components

**`./libs/react-app/components/src/lib/demo-list`**

```javascript
nx generate @nrwl/react:component --name=demo-list --project=react-app-components --export --globalCss --no-interactive
```

---

## Enforce module boundaries

[Programmatic code analysis
](https://medium.com/showpad-engineering/how-to-programmatically-enforce-boundaries-between-applications-and-libraries-in-an-nx-monorepo-39bf8fbec6ba
)

So that following applies:

- `react-app` and corresponding components can consume - only publicly exposed parts of Redux store: `@redux/store`, `@redux/hooks`

### Configure `'nx.json'` file

Define boundaries/constraints using tags.

```javascript
"projects": {
  "react-app": {
    "tags": [
      "scope:web",
      "type:react-app",
      "store:public"
    ]
  },
  "react-app-e2e": {
    "tags": [
      "scope:web",
      "type:react-app",
      "store:public"
    ],
    "implicitDependencies": [
      "react-app"
    ]
  },
  "react-app-components": {
    "tags": [
      "scope:web",
      "type:react-app",
      "store:public"
    ]
  },
  "react-app-state-store": {
    "tags": [
      "store:public",
      "store:private"
    ]
  },
  "react-app-state-hooks": {
    "tags": [
      "store:public",
      "store:private"
    ]
  },
  "react-app-state-action-creators": {
    "tags": [
      "store:private"
    ]
  },
  "react-app-state-reducers": {
    "tags": [
      "store:private"
    ]
  },
  "react-app-state-action-types": {
    "tags": [
      "store:private"
    ]
  },
  "react-app-state-actions": {
    "tags": [
      "store:private"
    ]
  }
}
```

### Configure `'.eslintrc.json'` file

Replace default configuration with:

```javascript
"depConstraints": [
  {
    "sourceTag": "type:react-app",
    "onlyDependOnLibsWithTags": [
      "scope:web",
      "type:react-app",
      "store:public"
    ]
  },
  {
    "sourceTag": "store:private",
    "onlyDependOnLibsWithTags": [
      "store:private"
    ]
  }
]

---
