import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import emojipedia from "./emojipedia";

ReactDOM.render(<App />, document.getElementById("root"));

console.log(emojipedia);

const newEmo = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(newEmo);

//ES6+

var number = [15, 65, 28, 8, 98];
var newNum = [];

console.log(number); // log array
//map()
const num = number.map(function (y) {
  return y * 3;
});
console.log(num);

//forEach() -for loop
function double(x) {
  newNum.push(x * 2);
}
number.forEach(double);
console.log(newNum);

//filter()
const newFiltnum = number.filter(function (numfilt) {
  return numfilt < 10;
});
console.log(newFiltnum);

//reduce()-accumulater,object1
var newNamReduce = number.reduce(function (accumulater, currentNum) {
  return accumulater + currentNum;
});
console.log(newNamReduce);

//find()
const newNumFind = number.find(function (numFind) {
  return numFind < 10;
});
console.log(newNumFind);

//findIndex()
const newNumFindIndex = number.findIndex(function (numFind) {
  return numFind < 10;
});
console.log(newNumFindIndex);
