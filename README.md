# STLogic Web App front-end

## Git Workflow
Please go to [agency wiki](https://gitlab.com/creatella/knowledge-base/wikis/how-to-use-git) for more detail.

## Working with the repo
Create your own branch when working on any feature of the site and commit your changes to that branch (ideally each feature will have its own branch). After pushing your commits to Gitlab open a merge request with the **Develop** branch. The merging will be done by the respective Team Leaders. **DO NOT** push your commits directly to the Develop or Master branch. Try to divide your work into small features and commit often.

If you already made changes in protected branch, use `git checkout -b <new-branch>` to move all your changes to a new branch.

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

## EditorConfig
Please install the relevant [EditorConfig](http://editorconfig.org) plugin for your code editor so that there is a  consistent coding style across all team members based on the rules defined in `.editorconfig`.

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

