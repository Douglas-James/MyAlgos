function addUptoFirst(n){
   let total = 0;
   for (let i = 1; i <= n; i++) {
      total += i;
   }
   return total;
}

console.log(addUptoFirst(5)); // 15


// The above function can be refactored to the following
function addUptoSecond(n){
   return n * (n + 1) / 2;
}

console.log(addUptoSecond(5)); // 15


