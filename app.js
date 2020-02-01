import { createUserObject, saveUserObject } from './common/utils.js';

//set up main index.html page with form and ids needed
//get data (name, character selection) from user input in home page

//create new variable userFormData that will go and get the element form from the index.html.
const userFormData = document.getElementById('form');
    
//create an event handler with submit to create the user object. 
//add an event listener to the userFormData that will activate when the user submits the form. 
userFormData.addEventListener('submit', function(event) {
    //use to prevent the page from auto-refreshing
    event.preventDefault();

    //create a new instance of form data
    const formData = new FormData(userFormData);
    //create a new user based on the data they input from the form
    const newUser = createUserObject(formData);

    //save each new user to local storage
    saveUserObject(newUser);

    //redirect to the map page when they hit submit
    window.location = './quiz-map/';

});


   
