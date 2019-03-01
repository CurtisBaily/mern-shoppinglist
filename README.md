This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## Deploying the app for Development

In the project directory, you can run:

### `npm install`

Installs server-side dependencies from `package.json`.

### `npm run client-install`

Installs client-side dependencies from `client/package.json`.

### `.env`

Provide the app the MongoDB URL.

```
echo "DATABASE_URL=<YOUR URI HERE>" >> .env
```

Specifying a port. (Default 5000)

```
echo "port=<port>" >> .env
```

Simulating production.

```
echo "NODE_ENV=production" >> .env
```

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

---

## Deploying the app in production

Ensure evrionment variables are set for `DATABSE_URL`, `port` and `NODE_ENV`

### `npm install`

Installs server-side dependencies from `package.json`.

### `npm run client-install`

Installs client-side dependencies from `client/package.json`.

### `npm start`

Rund the app in in a single node instance for production.

---

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
