# PrizePicks Pokemon Pokedex App

NOTE: Create React App instructions follow this section

## Public Hosting

http://prize-pick-pokemon.s3-website-us-east-1.amazonaws.com/

## Video 

https://share.vidyard.com/watch/kSLS1daExKNo9PEhaUQmxY?

## Screenshots

![Screenshot1](https://github.com/bluevivid/prize-picks-pokemon/assets/1273468/625db62f-90a3-4d93-aec6-71e07a332898)
![Screenshot2](https://github.com/bluevivid/prize-picks-pokemon/assets/1273468/03577e62-ba05-4acf-84ef-c0639fa5516a)
![Screenshot3](https://github.com/bluevivid/prize-picks-pokemon/assets/1273468/bc9c5140-c350-41ba-a8f9-75c27752ac27)
![Screenshot4](https://github.com/bluevivid/prize-picks-pokemon/assets/1273468/86435951-6e4d-4b3b-988e-1d2c28778cd4)
![Screenshot5](https://github.com/bluevivid/prize-picks-pokemon/assets/1273468/2dde64b6-d3a2-4f03-8c3d-fb126c2336ad)

## System Requirements

- Node v18.16.0
- npm 9.6.7
- react: ^18.2.0
- react-dom: ^18.2.0
- react-redux: ^8.0.7
- @reduxjs/toolkit: ^1.9.5
- Chrome Version 114.0.5735.110 (Official Build) (64-bit)

## NPM Script to start

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Items completed

- All work took about 2.5 hours total
- From a list of all available Pokemon, user can select (and/or type in the search box)
- Upon selection, the Pokemon selected will be in the highlighted top section (screen included)
- you can then search and select more Pokemon, each will be in the highlighted top section (screen included)
- The Pokemon cards include a Sprite, Species Name, Types, and Abilities exposed
- There is some basic styling for sections
- There is also a rule stopping duplicates from being displayed in the history

## TODO

- With more time, I would like to add a Tailwind or Material for better styling
- I would like to discuss layout with designer team for better search experience
- I didn't have time to add a "reset" button on the search input (you can reset with blank), I would like to cleanup the search input
- I didn't get to add tests
- There is no Authentication
- I would like to clean up the TS more, I had to use "any" definition a couple times for time
- I am using a static data import for populating the search list. I have a Query stubbed out in the reducers, but didn't implement it because I didn't want to introduce risk.
- I wanted to run virtual machines to test multiple browsers, but decided to punt on that for time. I am using Chrome Version 114.0.5735.110 (Official Build) (64-bit) for my localhost

NOTE: I tried to keep my efforts under 2.5 hours

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
