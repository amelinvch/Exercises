'use strict';

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

names.forEach(e => console.log(e));

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

let answers = ['IvAn', 'AnnA', 'Hello'];
answers = answers.map(item => item.toLowerCase());
console.log(answers);

const some = [4, 'qwq', 'sdfsda'];
console.log(some.every(item => typeof(item) == 'number'));

console.log(some.some(item => typeof(item) == 'number'));

const arr = [4, 5, 1, 3, 2, 6];
const res = arr.reduce((sum, current) => sum + current, 3);

const arr2 = ['apple', 'pear', 'plum'];
const res2 = arr.reduce((sum, current) => sum + ', ' + current);
console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal',
};
const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0]);
console.log(newArr);