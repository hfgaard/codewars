// Create a function squares(x,n) that starts with a number (x) and returns an array of length (n) with squares of the previous number. If n is negative or zero, return an empty array/list.
// squares(2,5)=[2,4,16,256,65536]
// squares(3,3)=[3,9,81]

function squares(x, n) {
  var arr = [];
  if (n <= 0) {
    return arr;
  }
  arr.push(x);
  for (var i = 0; i < n - 1; i++) {
    arr.push(arr[i] * arr[i]);
  }
  return arr;
};

// Test cases
console.log(squares(2,5),[2,4,16,256,65536]);   
console.log(squares(3,3),[3,9,81]);  
console.log(squares(5,3),[5,25,625]);  
console.log(squares(10,4),[10,100,10000,100000000]); 
