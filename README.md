# Getting Started with Axelote sample app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode (frontend and API concurrently in watch mode).\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
Open [http://localhost:3001](http://localhost:3001) to access the API

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run dev-api`

Runs the API in watch mode\
Open [http://localhost:3001](http://localhost:3001) to access the API

The API will reload when you make changes.\

### `npm run build`

Builds the forntend app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `npm run prod`

Runs the API and frontend under single app. 
Requires `npm run build` first.

### Docker build
docker build -t sample-app:1 .

### Docker run
docker run -p 5000:3001 sample-app:1