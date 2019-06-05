
## Folder Structure
All source js, css and image files are contained the `src` folder.

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## JavaScript Coding Style
For the JavaScript coding we will follow this guide - https://github.com/rwaldron/idiomatic.js/. There will be some minor variations to this style guide for our own purposes. ESLint has been configured to catch all deviations from this guide (as well as regular errors). We will also use the ES6 syntax of JavaScript.

## Build Process
For installing npm packages we will use [Yarn](https://yarnpkg.com/). Please refer to its documentation for further details. Note that after installing/uninstalling a package you will need to commit the `yarn.lock` file along with `package.json`.

Use `yarn` from your terminal to install all necessary node modules required for the build process. This process needs to be repeated whenever any changes to `package.json` are made.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

In order to create a build in production mode but with staging environment variables then execute `npm run build:staging`

## Mock-ups

https://www.figma.com/file/DjLVhNyoVGhE9On9AKvvmQ/ST-Logic_?node-id=0%3A1
