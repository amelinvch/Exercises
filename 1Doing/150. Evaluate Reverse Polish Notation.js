/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const validOperator = ['+', '-', '*', '/'];
  for (let ind = 1; ind < tokens.length; ind++) {

    let elem = tokens[ind];
    if(validOperator.includes(elem)){
      let operOne = +tokens[ind-2];
      let operTwo = +tokens[ind-1];

      let sum = OPERATORS[elem](operOne, operTwo)

      tokens.splice(ind-2, 3, sum);
      ind = 1;
    }

  }
  return tokens[0];
};

var OPERATORS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => Math.trunc(a / b)
};


console.log(evalRPN( ["2","1","+","3","*"] ));
// console.log(evalRPN( ["4","13","5","/","+"] ));
// console.log(evalRPN( ["10","6","9","3","+","-11","*","/","*","17","+","5","+"] ));
console.log(evalRPN( ["4","-2","/","2","-3","-","-"] ));
console.log(evalRPN( ["-78","-33","196","+","-19","-","115","+","-","-99","/","-18","8","*","-86","-","-","16","/","26","-14","-","-","47","-","101","-","163","*","143","-","0","-","171","+","120","*","-60","+","156","/","173","/","-24","11","+","21","/","*","44","*","180","70","-40","-","*","86","132","-84","+","*","-","38","/","/","21","28","/","+","83","/","-31","156","-","+","28","/","95","-","120","+","8","*","90","-","-94","*","-73","/","-62","/","93","*","196","-","-59","+","187","-","143","/","-79","-89","+","-"] ));