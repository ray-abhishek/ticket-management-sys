# Citizen Issue Tracker
##### A Ticket Management System

In a muncipality, there are numerous departments relating to Sanitation, Water Supply, Plumbing etc. Using this Ticket Management System, issues can be raised to the concerned department, which can then be responded to. 

Covers below use cases :-
1. User can raise a new ticket for any of the listed departments

    ![N|Solid](https://i.imgur.com/gc0GxLO.png)


2. A new department can be created. 

    ![N|Solid](https://i.imgur.com/XNkX3HZ.png)


3. A ticket can be responded to with further comments and either put on Pending, On Hold or Solved. 
    
    ![N|Solid](https://i.imgur.com/LK29ave.png)


     ![N|Solid](https://i.imgur.com/IUzQdg6.png)


4. Dashboard displays graphical representations on the nature of overall data. To do so, it has a pie chart showing how many tickets are in Pending, On Hold and Solved. It also has a bar chart showing the tickets department wise. 

    ![N|Solid](https://i.imgur.com/4ujUBXh.png)



I've used React for Frontend and Redux for State Management. At the backend, I've used Flask and MySQL(Database).

To Start the App locally, 
1. Activate VirtualEnv by "virtualenv flaskbackend/bin/activate"
2. Set Environment Variables by "export FLASK_ENV=development" , "export FLASK_APP=server.py" .
3. Start the server by executin command -> "flask run"
4. execute command -> "npm start"


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
