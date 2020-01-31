// Import metadata
import quizzes from '../data/quizData.js';
import { createUserObject, saveUserObject, getUserStatus } from '../common/utils.js';


//check local storage to see what questions have been completed (localStorage.getItem. Located in utils.js. Import getUserStatus above. 
//call user status to check local storage.
getUserStatus();


//make a function! 
//iterate through quizzes array to see if the user has answered all the questions
function checkIfUserCompletedAllQuizzes() {
    quizDataArray.forEach(quiz, user => {
        //if the quizzes are all completed return true (*check this syntax)
        if (user.completedQuizzes[quiz.id]) {
            return true;   
            //otherwise, return false
        } else {
            return false;
        }
    });
//consider moving this function to another file...



//if there are no questions left to answer...
if(checkIfUserCompletedAllQuizzes(quiz,user) === true) {
     //redirect to the results page
    return window.location = './results/index.html';
//if there are any questions left to answer...
} else {
//render a list of REMAINING questions based on the metadata

}





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