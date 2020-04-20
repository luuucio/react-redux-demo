# React & Redux Demo

## Concurrently Installation

To run server and client we need to install concurrently in the root directory

```bash
npm init -y
npm i -D concurrently
```

## Client Installation

```bash
cd client
```

### React

```bash
npx i create-react-app .
```

### CSS

```bash
npm i bulma
```

### Redux

```bash
npm i redux react-redux redux-thunk redux-devtools-extension
```

## Server Installation

```bash
cd server
npm init -y
npm i json-server
```

## Server Configuration

Add this to the scripts section of package.json

```json
"start": "json-server --watch db.json --port 5000",
```

## Concurrently Configuration

Add this to the scripts section of package.json

```json
"dev": "concurrently \"npm start --prefix client\" \"npm start --prefix server\""
```

## .gitignore

Add the .gitignore file in the root directory with the following content:

```
# dependencies
/client/node_modules
/server/node_modules
node_modules
/client/.pnp
/client/.pnp.js

# testing
/client/coverage

# production
/client/build

# misc
/client/.DS_Store
/client/.env.local
/client/.env.development.local
/client/.env.test.local
/client/.env.production.local

/client/npm-debug.log*
/client/yarn-debug.log*
/client/yarn-error.log*
```

## git

Remove the .git folder and the .gitignore in the client and server directory.
Create the git repository in the root folder

```bash
git init
git add .
git commit -m "Initial commit"
```

# Redux Implementation

## Step 1 - Create the rootReducer

Create index.js in the reducers directory

## Step 2 - Create the store

Create store.js file in the src directory

## Step 3 - Import the store in App.js

Add these imports in the App.js

```js
import { Provider } from "react-redux";
import store from "./store";
```

and wrap the returned tree with

```js
 <Provider store={store}>
```

## Step 4 - Create the action and the types

Create types.js and todoActions.js in the actions folder

## Step 5 - Create the reducer

Create todoReducer.js in the reducers folder

## Step 6 - Add the reducer to the rootReducer

## Step 7 - Add Redux to the component

For example, in the TodoList component, add these imports:

```js
import { connect } from "react-redux";
import { getTodos, setLoading } from "../actions/todoActions";
```

Add the mapStateToProps function and connect it to the component
