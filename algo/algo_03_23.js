for (var i = 10; i > 0; i--) {
    if (i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}

console.log("liftoff!");

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

// your code here!

console.log("there are " + countPositives + " positive values");

function returnArrayCountGreaterThanY(arr, y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
        }
    }
return count;
    console.log(count)
}
var testArr9 = [3, 4, -2, 7, 16, -8, 0];
var val = 0;
console.log(returnArrayCountGreaterThanY(testArr9, val));