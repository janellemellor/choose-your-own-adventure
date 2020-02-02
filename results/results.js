


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
//may not need this- not hiding this section?
// const resultsSection = document.getElementById('results-section');


// get the user choices from local storage
const user = getUserStatus();


// Write function(s) to test conditions of user object
//count the number of answers that correspond to each category and get a winner

function calculateCarbonFootprint(cf) {
    if (cf <= 100) {
        return 'Keep up the good work! You have a low carbon footprint';
    } else if (cf <= 200 && cf > 100) {
        return 'Great job! You are doing a lot to keep Portland Green!';    
    } else {
        return 'Good effort!';
    }
}

function calculateNumberOfTreesEarned(trees) {
    if (trees <= 3) {
        return 'As a reward, you get to plant three trees!';
    } else if (trees <= 7 && trees > 3) {
        return 'Thanks for volunteering to plant five trees!';
    } else {
        return 'Can you help us plant all these trees?';
    }
}

//based on the answers, display corresponding results based on cf points.
const cfScore = calculateCarbonFootprint(user.cf);
const numberOfTreesEarned = calculateNumberOfTreesEarned(user.trees);



finalResults.textContent = `Thank you for playing! ${cfScore} + ${numberOfTreesEarned}`;