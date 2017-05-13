# README #

## Welcome! ##

This new web app for LawSmith is a work-in-progress. It utilizes React for the JavaScript framework and Material UI for styling DOM elements.

## Screenshots ##

Landing page banner:

![LawSmith banner](/src/images/landing-page.jpg)

## Getting started ##

First, clone the repo:

`git clone git@bitbucket.org:ilsllc/mylawsmith.git`

Once you've downloaded the app, you'll need to install all package dependencies. From the directory where `package.json` is located, type:

`npm install`

When all packages have finished installing, you can start up a development server with:

`npm start`

This server live-reloads all CSS and JavaScript changes. When we're ready to build a version for production release, we'll run:

`npm run build`

This will create deployable files in the `/build` directory. For front-end development, I suggest installing the [Atom editor](https://atom.io/) and adding the `linter-eslint` package (this can be done from File -> Settings -> Install). This will allow the included `.eslintrc` configuration to appropriately lint the .jsx files and their embedded HTML.
