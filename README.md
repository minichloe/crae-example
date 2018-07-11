# CUSTOM COWSAY
A fun talking cow generator with Create-React-App and Express.

This repo is an example of how to connect an Express backend with React, and subsequently deploying to Heroku.

See the tutorial: [How to deploy a create-react-app with an Express backend to Heroku](https://medium.com/@chloechong.us/how-to-deploy-a-create-react-app-with-an-express-backend-to-heroku-32decfee6d18)

See the deployed site: [Custom Cowsay](https://crae-example.herokuapp.com/)

## Deploying to Heroku

This is ready for deployment, assuming you have an account with Heroku and have installed the Heroku CLI tools.
Note: This repo uses NPM. For yarn, you will have to change the command in package.json to `"heroku-postbuild": "cd client && yarn && yarn build"`

1. Clone this repo.
2. In the root directory of the repo, run `heroku create`.
3. Run `git push heroku master` which will build the frontend and deploy it and the backend to Heroku.
