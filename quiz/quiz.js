//import metadata:
import quizzes from '../data/quizData.js';
import { findById } from '../quiz/quiz-utils.js';   

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
    quizChoice.appendChild(label);
}

 
    //for the form, add an event listener on 'submit'
        //in the event listener get the formData
        //use the user selection in the form fdata to update the dom and change state
        //call the question completed in state, and redirect to list/map page

      
     //create a label for each choice with span and input inside --