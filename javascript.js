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
];

let pairs;

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    pairs = array.concat(array);
}

shuffle(array);
console.log(array);
console.log(pairs);

let a = 5
let b = 5

function checkPair() {
    if (a === b){
        console.log("yes")
    } else if (a != b) {
        console.log("no")
    }
}

checkPair()

//things to consider. What if people don't want to split evenly. What if they don't want to give 20% tip. What if the tip was included?

function splitBillEven(check, people, percentage) {
    const tip = check * (percentage / 100);
    console.log("this is the total tip: ", tip.toFixed(2));
    let split = (check / people) + tip;
    console.log("this is what each person pays: ", split.toFixed(2))
}

splitBillEven(350.75, 8, 10);

//people would have to be self administerd for spliting the bills per item

function splitBillJustMe(check, food, drink, people) {
    const tip = (check / 10) * 2;
    console.log(tip.toFixed(2));
    let split = (food + drink) + (tip / people);
    console.log(split.toFixed(2))
 }


 splitBillJustMe(350.75, 55.34, 15.4, 18)


// event listeners testing 

container.addEventListener{
    
}