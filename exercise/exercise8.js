var x = 1;

while (x <= 100) {
    // 1.
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("FizzBuzz");
    } 
    // 2.
    else if (x % 3 === 0) {
        console.log("Fizz");
    } 
    // 3.
    else if (x % 5 === 0) {
        console.log("Buzz");
    } 
    // 4.
    else {
        console.log(x);
    }

    // 
    x = x + 1;
}
