// Create a function that rounds a number n to p decimal places and returns it as a string.
// For example:
// Round(1.56881,4)==>"1.5688"
// Round(0.3333,2)==> "0.33"

// With toFixed
function Round(n, p) {
  return n.toFixed(p);
};

// Without toFixed
function Round(n, p) {
  var arr = n.toString().split('.');
  var dec = arr[1];
  arr[1] = '';
  for (var i = 0; i < p - 1; i++) {
    arr[1] += dec.charAt(i);
  };
  if (dec.charAt(p) < 5) {
    arr[1] += dec.charAt(p - 1);
  } else {
    arr[1] += dec.charAt(p - 1);
    arr[1]++;
  }
  return arr.join('.');
};

// Test cases
console.log(Round(0.134,2),"0.13");
console.log(Round(0.1123,1),"0.1");
console.log(Round(0.11289,3),"0.113");
console.log(Round(1.56881,3),"1.569");
console.log(Round(1.56881,4),"1.5688");
