// Import metadata
import quizzes from '../data/quizData.js';
import { createUserObject, saveUserObject, getUserStatus } from '../common/utils.js';
import { checkIfUserCompletedAllQuizzes, createAnchorTagIfQuizIsNotCompleted, reateSpanIfQuizIsCompleted } from '../quiz-map/quizMapUtils.js';


//call user status to check local storage.
const user = getUserStatus();

//get the ul from the DOM
const mapUL = document.getElementById('quiz-list');
//append the question li to the ul (li's are created in functions in quizMapUtils)
//may need to append this in my other functions...
mapUL.appendChild.li;



//if the user completed all the quizzes
    if (checkIfUserCompletedAllQuizzes(quiz, user)) {
    //redirect to the results page
        window.location = './results/';
    }
 }


//get the questions from the metadata
 //loop through the quizzes
 for (let i = 0; i < quizzes.length; i++) {
    //get quizzes
    const quizQuestions = quiz[i];
   //set state of quizes to null (since it's a string)
    let quizzesDisplayed = null;



//if there are no questions left to answer...
if(checkIfUserCompletedAllQuizzes(quiz,user) === true) {
    
//if there are any questions left to answer...
} else {
//render a list of REMAINING questions based on the metadata
//....
}





 