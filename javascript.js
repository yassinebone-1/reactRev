
function addNumbers(a, b) {
    return a + b;
}

const result = addNumbers(5, 3);
console.log("Result:", result); 

const greet = (name) => `Hello, ${name}!`;
console.log(greet("K k")); 


const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log("Squared:", squared); // Output: Squared: [1,4,9,16,25]
