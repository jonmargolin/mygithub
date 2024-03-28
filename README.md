# MyGithub

## Installation
 * This is an  angular application run npm install to install all dependencies
 * Run ng serve or npm start to run the application locally.
 * Run ng build or npm run build to build an production version of the application.
 * To add the husky gitHook run  npm run prepare it will run the pre  commit hook for linting the application

 ## ci cd pipeline
     This repo have an pipeline that run lint and unittest for each pr and deployment for netlify hosting.
     Todo add e2e  testing  with playwright
## CSS Style
###  Components
* the application use angular material for all the components
* For custom style  the application use Tailwindcss. changes could be made in the tailwind.config file in order to extend it.

## State Management
 the application use NgRx SignalStore to manage the application state the  way the application is isolated and  could be integrated into different applications with out any dependencies.

## Data Flow
 the store is the single source of true in order to save on data integrity.\
 all the manipulating is done in the store.
 all communication between to components is done via event outputs,\
 and received in the main components to communicate with the store and services.\
 <br/>
 ![alt text](https://github.com/jonmargolin/mygithub/blob/main/flow.png?raw=true)

      

 


