# React Starter Frontend
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
  - Uses [CSS Modules](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet) and [SASS](https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet)
  
## Development
### Prerequisites

- [Node.js](https://nodejs.org/en/) - should work with the latest versions and the LTS version
- [yarn](https://yarnpkg.com/en/) is used rather than [npm](https://www.npmjs.com/)

### Get started 
- clone the repo
- `yarn` to install dependencies
- `yarn start` to start development server
- `yarn lint` to start eslint and fix issues in your project. Don't forget do this each time before commit and push.
- `yarn build` to create a build

### Production
- you can make changes in `index.html` file and other files in `public` folder with a require options of your project.
- after the `yarn build` script is executed, the `index.html` file is automatically generated in the `build` folder. Please use `index.html` from for deployment on production.
