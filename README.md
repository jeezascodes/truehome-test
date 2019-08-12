# TrueHome test
Practical test for Frontend Developer position at Truehome.com.mx
## Quick Overview

```sh
cd truehome-test
cd backend
npm install 
npm start
cd ..
cd Frontend
npm install 
npm start
```
http://localhost:8000/ should Open automatically, if not, then open http://localhost:8000/ to see the app.

## What’s Included?

Npm packages and dependencies used in the project

### Backend

- Express, (Robust routing,HTTP helpers (redirection, caching, etc),Content negotiation) https://www.npmjs.com/package/express
- nodemon, (automatically restarting the node application when file changes in the directory are detected) https://www.npmjs.com/package/nodemon.
- Mongoose, (Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment). https://www.npmjs.com/package/mongoose
- dotenv, (Storing configuration in the environment separate from code) https://www.npmjs.com/package/dotenv.
- body-parser, (Parse incoming request bodies in a middleware before your handlers) https://www.npmjs.com/package/body-parser.
- cors. (for providing a Connect/Express middleware that can be used to enable CORS with various options) https://www.npmjs.com/package/cors.

### Frontend

- react, (JavaScript library for creating user interfaces) https://www.npmjs.com/package/react
- react-dom, (This package serves as the entry point to the DOM and server renderers for React) https://www.npmjs.com/package/react-dom
- react-scripts, ( includes scripts and configuration used by Create React App). https://www.npmjs.com/package/react-scripts
- dotenv, (Storing configuration in the environment separate from code) https://www.npmjs.com/package/dotenv.
- axios, (Promise based HTTP client for the browser and node.js) https://www.npmjs.com/package/axios.

## Project design decisions

- Just for test purposes a mono-repo structure with both backend and frontend in separate folders was implemented, this is not the ideal structure for a real project that is going to be deployed, but instead was the easiest way to structure things for a basic project like this

- On the backend side a mongo database was created as it provided for a light, easy to use test model, a real project might benefit from a realational DB

- There was no use of UI themes or css prepocessors since a basic project like this wouldn't have benefited tremendously from them and would only had created a lot of unnecessary boiler plate code

## Things that could be improved

- Developer dependencies should be saved under dev dependencies and not as general dependencies
- Gitflow (feature specific branches, development branch etc) should be implemented to have a better organized repo
- Create different mongo collections for every specific set of related data or alternatively use SQL
- Use Factoriy Functions to handle event changes instead of having a separate function for every input change
- Use Sass for easier component specific css
- Use separate component folders for every specific component and its childs
- Use a dependency like SVGR to handle transforming SVG files into flexible React components