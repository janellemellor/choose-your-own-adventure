//Instructions: Design Game or Quiz
// Create metadata that describes the adventures or questions that will be presented to the user. This data needs to be consistent, meaning each item needs to have the same information. Think about:

// Common descriptors like title, description, and image, audio, and/or video.
// What are the choices to be presented to the user, and what are the "consequences", or adjustments that are to be made to the user object

//Create three (more if time) quiz options for the user to choose from. 
//For each quest, use a new variable name and use an object rather than an array to store the information. 
//make sure to include the choices as an array within the object.
//use cf: to calculate carbon footrprint (less points is better based on result
//use trees: to calculate number of trees that you get to plant at the end based on the result. More is better. 
//export.

const diet = {
    id: 'diet',
    title: 'What`s the beef?',
    description: 'Some description asking a question about how much meat you eat',
    // image: '',    come back and add image here
    choices: [{
        id: 'carnivore',
        description: 'something about loving meat here',
        result: 'something non-judgy about their diet, plus maybe something to encourage eating less meat! Perhaps a quote added here',
        cf: 100,
        trees: 1,
    }, {
        id: 'vegetarian',
        description: 'something about eating vegetarian or weekday vegetarian',
        result: 'something encouraging with a quote?',
        cf: 50, 
        trees: 2, 
    }, {
        id: 'vegan',
        description: 'something about vegan power',
        result: 'wow! you are doing a great job!',
    }],
};

const transportation = {
    id: 'transportation',
    title: 'pedal power',
    description: 'Some description asking a question about your primary mode of transportation',
    // image: '',    come back and add image here
    choices: [{
        id: 'humanPowered',
        description: 'I walk and/or bike everywhere/almost everywhere when I can!',
        result: 'your fitbit must be out of this world! keep up the great work! quote added here',
        cf: 25,
        trees: 3,
    }, {
        id: 'publicTransport',
        description: 'something about taking the bus, max, streetcar, etc',
        result: 'some encouraging result with a quote',
        cf: 50, 
        trees: 2, 
    }, {
        id: 'car',
        description: 'something about driving',
        result: 'something encouraging along with a tip about ways to keep you car emissions lower if you drive.',
        cf: 100,
        trees: 1,
    }],
};

const reuse = {
    id: 'reuse',
    title: 'would you like a straw?',
    description: 'Some description asking a question about re-using, not wasting.',
    // image: '',    come back and add image here
    choices: [{
        id: 'mostlyDisposables',
        description: 'I get overwhlemed and often dont have time to cook/prep at home',
        result: 'something encouraging here with quote/tips',
        cf: 100,
        trees: 1,
    }, {
        id: 'sometimesReuse',
        description: 'something about having shopping bags and trying to recycle but often forget them or do not know what is and is not recycle-able',
        result: 'some encouraging result with a quote/tips',
        cf: 50, 
        trees: 2, 
    }, {
        id: 'alwaysRecycle',
        description: 'something about bringing bags and silverware and having your own metal straws',
        result: 'you are a pro! still input quote/tips',
        cf: 25,
        trees: 3,
    }],
};

export { diet, transportation, reuse };