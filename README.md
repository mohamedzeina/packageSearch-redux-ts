## Description
Simple application that allows the user to search for names of npm packages using the npmjs API. This application uses React, TypeScript and Redux.
Three states were utilized inside the redux store:
1) Loading State (when the action creator is loading the data from the API)
2) Success State (when the action creator loads the data successfully)
3) Error State (when something goes wrong with the data loading)

## How To Run Locally
First, clone the repo to your local machine:
```
git clone https://github.com/mohamedzeina/packageSearch-redux-ts.git
```
Then, open up a terminal in the project's directory run the following command to install packages needed by the project:
```
npm install
```
Then, open a terminal in the local repo and run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

