//1
function hasOdd(numbers){
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 !== 0){
            return console.log(true);
        }
    }
    return console.log(false);
}

hasOdd([1, 2, 3, 4, 5])

//2
function Odd(numbers){
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 !== 0){
            console.log(numbers[i])
        }
    }
}

Odd([1,2,3,4,5])

//3
function square(numbers){
    const num = [];
    for (let i = 0; i < numbers.length; i++){
        num.push(numbers[i] ** 2);
    }
    return num;
}

console.log(square([1, 2, 3, 4, 5]))