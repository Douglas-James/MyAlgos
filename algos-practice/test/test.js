// const addUpto = (n) => {
//    // total variable to store the sum of the numbers
//    let total = 0;
//    // loop through the numbers from 1 to n
//    for (let i = 1; i <= n; i++) {
//       // add the current number to the total
//       total += i;
//    }
//    return total;
// };

// console.log(addUpto(5)); // 15
// console.log(addUpto(6)); // 21
// console.log(addUpto(7)); // 28


// nest loop 
// const nestedLoop = () => {
//    // let i = 0;
//    let total = 0;
//    for (let i = 0; i < 10; i++) {
//       for (let j = 0; j < 10; j++) {
//          console.log(`j: ${j} total: ${total}`);
//          total++; 
//       }
//       console.log(`i: ${i} total: ${total}`);
//       total++;
//    }
//    return total;
// }

// console.log(nestedLoop()); 


// conforting the object into a array

const obj = {
   a: 1,
   b: 2,
   c: 3
};

const objToArray = (obj) => {
   const arr = [];
   for (let key in obj) {
      arr.push(obj[key]);
   }
   return arr;
}

console.log(objToArray(obj)); // [1, 2, 3]

// object into string
const objToString = (obj) => {
   let str = '';
   for (let key in obj) {
      str += obj[key];
   }
   console.log(str);
   return str;
}

console.log(objToString(obj)); // 123