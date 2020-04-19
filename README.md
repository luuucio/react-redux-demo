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
