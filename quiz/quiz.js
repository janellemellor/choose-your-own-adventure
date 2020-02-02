//import metadata:
import quizzes from '../data/quizData.js';
import { findById } from '../quiz/quiz-utils.js';   
import { getUserStatus } from '../common/utils.js';

//get elements from DOM
const quizForm = document.getElementById('quiz-form');
const quizTitle = document.getElementById('quiz-title');
const quizDescription = document.getElementById('quiz-description');
const quizOptions = document.getElementById('quiz-options');



//create searchParams which will go into the URL and find the search parameters. URLSearchParams is built-in.
const searchParams = new URLSearchParams(window.location.search);

//get the quiz id from the URL search params
const quizId = searchParams.get('id');

 // Use findById function to find the quiz from the quiz metadata by searching by id
const findQuizById = findById(quizzes, quizId);

// if there is no quiz id found, redirect to the quiz map page
if (!findQuizById) {
    window.location = '../quiz-map/';
} 

//fill in the title of the found quiz
quizTitle.textContent = findQuizById.title;
//fill in the quiz question of the found quiz
quizDescription.textContent = findQuizById.question;
  

//loop through the quiz choices metadata 
for (let i = 0; i < quizzes.choice.length; i++) {
    //get the quiz choices and for each...
    const quizChoice = quizzes.choices[i];

    //create a label to wrap each radio button in
    const label = document.createElement('label');

    //create a span within the label
    const span = document.createElement('span');
    //add the description of the choice from the metadata to the span
    span.textContent = quizChoice.description;
    //append the span to the newly created label
    label.appendChild(span);

    //create an input element
    const radio = document.createElement('input');
    //assign it to be a radio button
    radio.type = 'radio';
    //assign the name to choice (so all buttons have same name and user can only select one.)
    radio.name = 'choice';
    //append the radio button to the span
    span.appendChild(radio);

    //append the quiz choices to each quiz question/choice
    const addChoices = quizChoice.appendChild(label);
    //append the radio buttons to the DOM
    quizOptions.appendChild(addChoices);

}   

 //for the form, add an event listener on 'submit'
quizForm.addEventListener('submit'), function(event) {
    //prevent page from auto-refreshing
    event.preventDefault();

    //create a new instance of formdata from the quiz page
    const formData = new FormData(quizForm);

    //get user choice from form
    const getQuizChoiceFromData = formData.get('choice');

    //find the user choice from the metadata
    const userChoice = findById(quizzes.choice, getQuizChoiceFromData);

    //get user info from local storage
    const getUpdatedUser = getUserStatus();
    



}
    
       

// write a function that takes the choice and the user object, which modifies the user object correctly

//create a function that takes in the choice and the user and updates the state based on the selection they make
function updateQuizScores(userChoice, user, quizId) {
    //add carbon footprint points depending on the question asked
    user.cf += userChoice.cf;
    //add number of trees earned to user depending on the question asked
    user.trees += userChoice.trees;
    //mark that user completed quiz
    user.completedQuizzes[quizId] = true;

    return updateQuizScores;
};



// Save the modified user object back to local storage
// Adjust the presentation based on the choice, as makes sense for your app
// Adjust the presentation to not allow further form input (hide or disable)
// Provide a link to go back to list page, and/or use setTimeout to auto navigate


     //use the user selection in the form fdata to update the dom and change state
        //call the question completed in state, and redirect to list/map page