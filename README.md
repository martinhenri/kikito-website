# Getting Started with Kikito-website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
[See Create React App Section](#create-react-app)
## Overview
This project is intended to produce a website to replace this [website](https://biscaratlea.wixsite.com/mysite) (powered by WIX).
  
Artistic direction : 
- simple and sober
- dark backgrounds / white font
## Development
### TODO
#### P1
- Arrange images in a grid
- Add description to image
- reset local storage on exitpage
- Fix manifest.json
- Create a similar background without using an image
  - at least adding placeholder background during loading time to prevent white flash
#### P2
- Media control (prevent visitors from downloading resources)
  - Using Vercel Blop to store and stream videos 
- improve SEO
  - adding sitemap
  - migrate to Next.js


### Branches
Usage of branch for new feature from main and using rebase to keep git history clean.
### Commit 
- Usage of [atomic commit](https://en.wikipedia.org/wiki/Atomic_commit) as much as possible
- Usage of [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) to keep git history clear

## Technical stack
### Web technologies
This website is build performed by 
- HTML
- CSS
- Javascript

### Development technologies
- React 18
- Node 20

### External Librairies
See packages.json file, some example of used libraries 
- [react router dom](https://www.npmjs.com/package/react-router-dom)
- [react compare image](https://www.npmjs.com/package/react-compare-image)
- [Grid Gallery](https://www.npmjs.com/package/react-grid-gallery)

## Code Architecture
### Navigation
#### Entry point
Application entry point is define in `/App.js` file where the Menu is define, using Router techno.

#### Router
Router is used to associate each menu option to a path, and each path to a jsx page.

#### Pages
Pages are define in the `/src/pages` folder. 
Each page is a React component.
If multiples pages needs specific css or javascript files, maybe pages architecture will be review to have a folder by page.

### Sources
- [original WIX Website](https://biscaratlea.wixsite.com/mysite)
- see `/src` folder for logo, images, etc.

### External components
Complex components from external libraries are defined in component folder and then imported in pages where they are needed.

### Utils / core
Utils folder defines shared javascript functions, css class, html sections or any reusable code not specific to a page.

## Browser support
### Browser list
Ideally, this website needs to run at least on this 3 browser, last 2 version :
- Chrome
- Firefox
- Safari

### Responsive
This website has to be accessible from any device including smartphone and tablet.


## Create React App 

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test` [WIP]

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
