"use strict";

let arr = ["abc","defgh","ijklmn"];

function cutIt(arr) {
   let num = [];
   for (let key in arr) {
      num.push(arr[key].length)
   }
   num.sort();
   return num;
}

console.log(cutIt(arr));