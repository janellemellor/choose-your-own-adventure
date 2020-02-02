//declare a new function createUserObject that will take in some form data
export function createUserObject(someFormData) {
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
        //return a new user with input from form
    }; return user;
} 

//save the user object to local storage
//declare a new function saveUserObject that takes in a user
export function saveUserObject(someUserObject) {
    //declare a variable json which will make the user a string for local storage
    const json = JSON.stringify(someUserObject); 
    //save user to local storage
    localStorage.setItem('someUser', json);
}

//check local storage to see what questions have been completed (localStorage.getItem()).

//declare a new variable getUserStatus which will get the user information 
export function getUserStatus() {
    //declare a variable json which will get information about our user from local storage
    const json = localStorage.getItem('someUser');
    // use JSON.parse to return the string as an object
    const user = JSON.parse(json);
    //if no json, return null;
    if (!json) return null;
    //give us the user information (as an object)
    return user;
}