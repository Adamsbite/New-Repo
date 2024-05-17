// example 

var greet = function() {
    console.log("Welcome to GeeksforGeeks!");
};
greet(); // Outputs: Welcome to GeeksforGeeks!


// example 2
var greet = function(platform) {
    console.log("Welcome to ", platform);
};
greet("GeeksforGeeks!"); // Outputs: Welcome to GeeksforGeeks!

// example 3 
var calculateArea = function(radius, height) {
    return Math.PI * radius * radius * height;
};
console.log(calculateArea(5, 10)); // Outputs: 785.3981633974483






// example4
var double = function(num) {
    return num * 2;
};
console.log(double(5)); // Outputs: 10
