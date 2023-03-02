let myArray = ["hello", "is", "it", "me", 45, true, "guff"];

console.log(myArray);

myArray.pop();

console.log(myArray);

myArray.unshift("guff");

console.log(myArray);

myArray.sort();

console.log(myArray);

console.log(myArray[4]);

let newArray = myArray.filter(function(remmey) {
    return remmey !== 'it';
});

console.log(myArray);
console.log(newArray);