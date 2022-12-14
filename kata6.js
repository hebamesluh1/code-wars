//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
function moveZeros(arr) {
var zeros = []; 
var others = [];
var res;

var arrayLength = arr.length;
for (var i = 0; i < arrayLength; i++) {
if   (arr[i] ==  0) {
zeros.push(arr[i]);
} else {
    others.push(arr[i]);
}
}
var res = others.concat( zeros );

return res;
}


//Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
function add(a, b) {
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");
    la = a.length;
    lb = b.length;
    var temp = [];
    var bit = 0;
    for(var i = 0; i < Math.max(la,lb); i++){
        if(i>=la){
        var cur = Number(b[i]);
        }else if(i>=lb){
        var cur =Number(a[i]);
        }else{
        var cur = Number(a[i]) + Number(b[i]);
        }     
        temp.push((cur+bit)%10);
        bit = Math.floor((cur+bit)/10);
    }
    if(bit==1){
        temp.push(1);
    }  
    var ans = "";
    for(var i=temp.length-1; i>=0; i--)
        ans+=temp[i];
    return ans;
}





//Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
function score( dice ) {
  var dc = [0,0,0,0,0,0];
  var tdr = [1000,200,300,400,500,600];
  var sdr = [100,0,0,0,50,0];

	// count for each number
  dice.forEach(function(x){ dc[x-1]++; });
	// add score
  return dc.reduce(function(s,x,i){ 
    return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
  },0);
}
//Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
function gap(g, m, n) {
  for(let i = m; i<= n;i++){
    if(isPrime(i) && isPrime(i + g)){
      let arr = Array(g - 1).fill().map((item, index) => i + index + 1)
      if(arr.filter((item) => isPrime(item)).length > 0){
        continue;
      }else{
        return [i, i+g];
      }
    }
  }
  return null;
}

function isPrime(num){
  let mid = Math.ceil(Math.sqrt(num));
  for(let i = 2; i <= mid; i++){
    if(num % i == 0){
      return false;
    }
  }
  return true;
}

/*Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.*/
function incrementString(str) {
  const body = str.slice(0, -1);
  const lastDigit = str.slice(-1).match(/[0-9]/);
  return lastDigit === null
    ? str + "1"
    : lastDigit != 9
    ? body + (+lastDigit + 1)
    : incrementString(body) + "0";
}
///Pyramid Slide Down
function longestSlideDown (pyramid) {
  for (var i = pyramid.length - 2; i > -1; i--) {
    for (var j = 0; j < pyramid[i].length; j++) {
      pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
    }
  }
  return pyramid[0][0];
}
//Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
function nextBigger(num) {
  let newNum = 0;
  let otherNum = 0;
  let indicator = 0;
  while (num > newNum) {
    if (indicator === 0) {
      otherNum = num;
      indicator++;
      continue;
    }

    if (
      String(num)
        .split("")
        .sort()
        .join("") ===
      String(otherNum)
        .split("")
        .sort()
        .join("")
    ) {
      if (otherNum > num) {
        newNum = otherNum;
      }
    }

    otherNum++;
  }

  return newNum;
}
//or by :
function nextBigger(n){
  var d = n.toString().split('');

  // find the pivot, the point (from right) where i > i-1
  var p = -1;
  for (var i = d.length-1; i > 0; i--) {
    if (+d[i] > +d[i-1]) {
      p = i-1;
      break;
    }
  }

  // if we are unable to find the pivot, skip
  if (p == -1) return p;

  // splice the digits in the pivot
  var right = d.splice(p);

  // extract pivot
  var pv = right.splice(0, 1)[0];

  // find the lowest number > pv
  var mm = null, mmi = null;
  for (var i = 0; i < right.length; i++) {
    if (right[i] > pv) {
      if (mm == null || right[i] < mm) {
        mm = right[i];
        mmi = i;
      }
    }
  }

  if (mmi == null) return -1;

  right.splice(mmi, 1);
  right.push(pv);
  right = right.sort();

  // concat the left + new pivot + right part
  var ret = +d.concat([mm]).concat(right).join('');
  if (ret < n) return -1;

  return ret;
}
//Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.
function mix(s1, s2) {
  var valid = 'abcdefghijklmnopqrstuvwxyz'.split(''),
      validLength = valid.length,
      grouped = [],
      final = [],
      regEx,
      found,
      toReturn = '';

  for ( var i = 0; i < validLength; i++ ) {
    regEx = new RegExp( valid[i], 'g' );

    // group letters for s1
    found = s1.match( regEx );
    if ( found && found.length > 1 ) {
      if ( ! grouped[ i ] ) {
        grouped[ i ] = [];
      }
      grouped[ i ][0] = found.join('');
    }

    // group letters for s2
    found = s2.match( regEx );
    if ( found && found.length > 1 ) {
      if ( ! grouped[ i ] ) {
        grouped[ i ] = [];
      }
      grouped[ i ][1] = found.join('');
    }
  }

  // Decide which word has more of each letter
  for ( var key in grouped ) {
    if ( ! grouped[ key ][0] ) {
      final.push( [ 2, grouped[ key ][1] ] );
    } else if ( ! grouped[ key ][1] ) {
      final.push( [ 1, grouped[ key ][0] ] );
    } else if ( grouped[ key ][0].length > grouped[ key ][1].length ) {
      final.push( [ 1, grouped[ key ][0] ] );
    } else if ( grouped[ key ][1].length > grouped[ key ][0].length ) {
      final.push( [ 2, grouped[ key ][1] ] );
    } else {
      final.push( [ '=', grouped[ key ][0] ] );
    }
  }
  final.sort(function( a, b ){
    var aLen = a[1].length,
        bLen = b[1].length;

    if ( aLen > bLen  ) {
      // Favor more letters and instances of one word having more
      // letters than the other, i.e., no [0] = '='
      return -1;
    } else if ( aLen < bLen ) {
      return 1;
    } else if ( aLen === bLen ) {
      if ( '=' !== a[0] && '=' === b[0] ) {
        return -1;
      } else if ( '=' !== b[0] && '=' === a[0] ) {
        return 1;
      } else if ( a[0] < b[0] ) {
        return -1;
      } else if ( b[0] < a[0] ) {
        return 1;
      }
      if ( a[1].charCodeAt(0) < b[1].charCodeAt(0) ) {
        return -1;
      } else if ( a[1].charCodeAt(0) > b[1].charCodeAt(0) ) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  return final.map(function(a){
    return a[0] + ':' + a[1];
  }).join('/');
}

//Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.
Array.prototype.sameStructureAs = function (other) { 
    Array.prototype.status = Array.prototype.status || true; 
    if(this.length != other.length){
      Array.prototype.status = false;
      return false;
    }


    for(var index = 0; index < this.length; index++)
    {

      var val = this[index];
       if(isArray(val) && isArray(other[index])){
          if(val.length != other[index].length){
            [].sameStructureAs([1,2,3])
            Array.prototype.status = false;
            break;
          }
          else{
            Array.prototype.status = true;
            val.sameStructureAs(other[index]);
          }
       }
       else if (!isArray(val) && !isArray(other[index])){
         Array.prototype.status = true;
       }
       else{
         Array.prototype.status = false;
         [].sameStructureAs([1,2,3])
         break;
       }
    }
    return Array.prototype.status;
};
//binary multiple of 3
// Regular expression that matches binary inputs that are multiple of 3
var multipleOf3Regex =/^((((0+)?1)(10*1)*0)(0(10*1)*0|1)*(0(10*1)*(1(0+)?))|(((0+)?1)(10*1)*(1(0+)?)|(0(0+)?)))$/;
