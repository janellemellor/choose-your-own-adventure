


//clear local storage for this user

// End Page
// Report to the user how they did


// Update presentation to reflect results:
// Text and messages
// Images
// Show/Hide Things
// Offer a link to "Play Again"

import { getUserStatus } from '../common/utils.js';

//get DOM
const finalResults = document.getElementById('final-results');
const resultsSection = document.getElementById('results-section');


// get the user choices from local storage
const user = getUserStatus();




// Testing: write function(s) to test conditions of user object
//count the number of answers that correspond to each category and get a winner
//based on the answers, display corresponding results based on cf points.

function calculateCarbonFootprint(cf) {
    if (cf <= 100) {
        return 'low';
    } else if (cf <= 200 && cf > 100) {
        return 'mid';    
    } else {
        return 'high';
    }
}