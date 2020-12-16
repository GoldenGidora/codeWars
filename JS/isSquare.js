// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

var isSquare = function(n){
    let string;
    if( n < 0) {
        return false;
    }else {
       let a = Math.sqrt(n);
       a = Math.round(a);
       if(a * a == n) {
           return true;
       } else {
           return false;
       }
    }
  }