function printMessage(callback) {
    console.log("Hello, World!");
    callback(); 
}

printMessage(function() {
    console.log("This is a callback function.");
});
last

function greet(name, callback, money) {
    console.log("Hello, " + name + "!");
    callback(name);
}

greet("Alice", function(name) {
    console.log(name + ", nice to meet you!");
});


function delayedGreeting(callback) {
    setTimeout(function() {
        console.log("Hello, after a delay!");
        callback();
    }, 2000);
}

delayedGreeting(function() {
    console.log("This message is displayed after the delay.");
});


function firstFunction(callback) {
    console.log("First function called.");
    callback();
}

function secondFunction() {
    console.log("Second function called.");
}

firstFunction(secondFunction);


function performOperation(callback) {
    try {
        // Simulate an operation that might fail
        console.log("Operation performed successfully.");
        callback(null, "Success!");
    } catch (error) {
        callback(error);
    }
}

performOperation(function(error, result) {
    if (error) {
        console.error("An error occurred:", error);
    } else {
        console.log("Result:", result);
    }
});
