let myArray = ["hello", "is", "it", "me", 45, true, "guff"];

console.log("orignal Array: ", myArray);

console.log("last item on Array: ", myArray.pop());

console.log("array with removed last item: ", myArray);

myArray.unshift("guff");

console.log("New first element in array with .unshift: ", myArray);

console.log("alphabatized Array: ", myArray.sort());

console.log("third item: ", myArray[4]);

let newArray = myArray.filter(function(remmey) {
    return remmey !== 'it';
});

console.log(myArray);
console.log(newArray);

newArray.unshift(newArray.pop());
console.log(newArray);


let find = newArray.find(item => item === "guff")
console.log("find item: ", find)

const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(array);
console.log(array);