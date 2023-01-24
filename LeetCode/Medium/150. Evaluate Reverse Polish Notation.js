/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * @param {string[]} tokens
 * @return {number}
 */

const evalRPN = function(tokens, stack = []) {
  for (const char of tokens) {
    const isOperation = char in operators;
    if (isOperation) {
      const value = performOperation(char, stack);
      stack.push(value);      

      continue;
    }
    stack.push(Number(char));  
  }
  return stack[0];
};

const performOperation = (char, stack) => {
  const [ rightNum, leftNum ] = [ stack.pop(), stack.pop() ];

  return operators[char](leftNum, rightNum);
}

const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => Math.trunc(a / b)
};

/**
var evalRPN = function(tokens) {
  const validOperator = ['+', '-', '*', '/'];
  for (let ind = 1; ind < tokens.length; ind++) {

    let elem = tokens[ind];
    if(validOperator.includes(elem)){
      let operOne =  tokens[ind-2];
      let operTwo = elem === '-' && tokens[ind-1] < 0 ? Math.abs(tokens[ind-1]) : tokens[ind-1];

      if(elem === '-' && tokens[ind-1] < 0) { operTwo = Math.abs(tokens[ind-1]); elem = '+'; }
      let sum = eval(`(${operOne}${elem}${operTwo})`);
      sum = sum > -1 && sum < 0 ? 0 : Math.floor(sum);


      tokens.splice(ind-2, 3, sum);
      ind = 1;
      console.log(operOne, operTwo, tokens)
    }

  }
  return tokens
};
*/

console.log(evalRPN( ["2","1","+","3","*"] ));
console.log(evalRPN( ["4","13","5","/","+"] ));
console.log(evalRPN( ["10","6","9","3","+","-11","*","/","*","17","+","5","+"] ));
console.log(evalRPN( ["4","-2","/","2","-3","-","-"] ));