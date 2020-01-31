//set up main index.html page with form and ids needed
//get data (name, character selection) from user input in home page

//create new variable userFormData that will go and get the element form from the index.html.
const userFormData = document.getElementById('form');

//create a function that takes a single instance of form data and pulls out user information to create a user object. 

//declare a new function createUserObject that will take in some form data
function createUserObject(someFormData) {
    //create a user object/variable
    const user = {
        //input some key value pairs with the user information that we need at the start of the quiz:
        //user name from the input
        name: someFormData.get('user-name-input'),
        //user character choice from the radio button
        character: someFormData.get('character'),
        //set initial state for carbon footprint tracking
        cf: 0,
        //set initial state for number of trees earned
        trees: 0,
        //tracks which quizzes the user has completed
        completedQuizzes: {},
    };
} 

//maybe move to another file
//save the user object to local storage
function saveUserObject(someUserObject) {
    const json = JSON.stringify(someUserObject); 
    localStorage.setItem('someUser', json);
}
   
    
//create an event handler with submit to create the user object. 
//add an event listener to the userFormData that will activate when the user submits the form. 
userFormData.addEventListener('submit', (event) => {
    //use to prevent the page from auto-refreshing
    event.preventDefault();

    //create a new user based on the data they input from the form
    const newUser = createUserObject(userFormData);

    //save each new user to local storage
    saveUserObject(newUser);

    //redirect to the map page
    window.location = './quiz-map/index.html';

});


   
