// Import metadata
import quizzes from '../data/quizData.js';
import { createUserObject, saveUserObject, getUserStatus } from '../common/utils.js';


//check local storage to see what questions have been completed (localStorage.getItem. Located in utils.js. Import getUserStatus above. 
//call user status to check local storage.
getUserStatus();


//if there are no questions left to answer...
    //loop through quizzes array and check if completed)

//iterate through quizzes array to see if the user has answered all the questions
quizDataArray.forEach(quiz => {
    //if the quizzes are all completed
    if (user.completedQuizzes[quiz.id]) {
        return true;   
    } else {
        return false;
    }
});



    //redirect to the results page





//if there are any questions left to answer...
//render a list of REMAINING questions based on the metadata
    //get the ul from the DOM
    //get the questions from the metadata
    //loop through the questions (forEach)
        //get a question from the array
        //make an li for the question
            //create li
            //make an anchor tag for the li UNLESS the quest is already completed (check local storage). If so, make a span. 
            //add textContent and other properties to the li
            //add the href to the a tag with query params for the question
            //append anchor tag to the li
        //append the question li to the ul

        // Loop through items and create links for each one
// Use href like quest/id=dragon to "pass" the selected id to the quest page