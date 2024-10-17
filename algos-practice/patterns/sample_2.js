function coundUpandDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
   // remove the undefined 
   if(j === 0) {
     return "Done!";
   }
    console.log(j);
  }
  console.log("Back down. Bye!");
}

const x = coundUpandDown(10);
console.log(x); // undefined