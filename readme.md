# Take Home Drag & Drop Project

### What we’d like you to build:
For this demo project, we would like you to use an existing boilerplate to create the application we’re looking for. The app will consist of one parent component, and 4 child components. 3 of the children will be draggable circle elements that contain a state object containing a color and a number. The 4th child is a droppable square element that has no information associated with it.

The functionality we’d like you to add is the ability to drag any of the color circle elements into the square and add that information to the square. If more than one circle is added, it’s information will ‘mix’ with prior information to create a new result. For example, if you mix {color: blue, number: 1} with {color:red, number 2}, the result in the square would be {color:purple, number:3}. You do not have to programmatically determine what the colors become, you can have that predetermined.

Once a circle element is dropped inside the square, it should disappear and the square should be updated visually with the number and color that it should be. A button should also appear (a 5th child component that you will need to build) that allows the demo to be reset to its original state.

Aside from background or border colors, please don’t modify any other styles.

For this demo, if red, blue and yellow are all mixed, the outcome should be black. 

### Instructions
* Go to our Github boilerplate for this project (https://github.com/osuecampus/take-home-drag-drop.git) and clone the repo locally to your machine.
* Modify the code locally to accomplish the demo requirements.
* Run the application locally using npm start to make sure it is functioning how you’d like it to.
* Push your completed project to a public repo in your own personal Github account and email us the address of the public repo so we can review it.

### Rules:
* You cannot bring in any additional dependencies, you must use vanilla Javascript, the HTML5 API and React to accomplish this project.
* You must use the boilerplate provided.

### Resources:
* Basic Git Commands: https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html
* React: https://reactjs.org/docs/getting-started.html
* HTML5 Drag & Drop API: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
* NPM: https://www.npmjs.com/get-npm