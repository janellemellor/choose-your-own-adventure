// Import metadata
import quizzes from '../data/quizData.js';
import { getUserStatus } from '../common/utils.js';
import { checkIfUserCompletedAllQuizzes, createAnchorTagIfQuizIsNotCompleted, createSpanIfQuizIsCompleted } from '../quiz-map/quizMapUtils.js';


//call user status to check local storage.
const user = getUserStatus();

//get the ul from the DOM
const mapUL = document.getElementById('quiz-list');


//get the questions from the metadata
 //loop through the quizzes
for (let i = 0; i < quizzes.length; i++) {
    //get quizzes
    const quizQuestions = quizzes[i];

   //set state of quizes to null (since it's a string)
    let quizzesDisplayed = null;

   //if the user completed the quiz
    if (user.completedQuizzes[quizQuestions.id]) {

        //mark quiz completed with a span
        const createSpan = createSpanIfQuizIsCompleted(quizQuestions); 
        quizzesDisplayed = mapUL.appendChild(createSpan);
    //else
    } else {
         //if null (quiz question was not answered), create a link to that quiz
        const createLink = createAnchorTagIfQuizIsNotCompleted(quizQuestions);
        quizzesDisplayed = mapUL.appendChild(createLink);

    }        
}

// if the user completed all the quizzes
if (checkIfUserCompletedAllQuizzes(quizzes, user)) {
    //redirect to the results page
    window.location = '../results';
    
}