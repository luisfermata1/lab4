let isMatchingBrackets = function (str) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {
        var llaves = '{}[]()';
        if (llaves.indexOf(str[i]) > -1) {
          // If character is an opening brace add it to a stack
            if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
                stack.push(str[i]);
            }
            //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
            else {
                let last = stack.pop();

                //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
                if (str[i] !== map[last]) {return false};
            }
        } 
        
    }
    // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
        if (stack.length !== 0) {return false};

    return true;
}
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Ingresa una cadena para ser analizada ', (answer) => {
    // TODO: Log the answer in a database
    //console.log('Thank you for your valuable feedback:', answer);
    console.log(isMatchingBrackets(answer));
  
    rl.close();
  });