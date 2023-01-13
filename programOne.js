const checkIfPrime = (number) => {
    let isPrime = true;

    if (number === 1) {
        return false
    }

    else if (number > 1) {

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        return isPrime;
    }
    return false
}

const checkIfArmstrong = (number) => {
    let nArray = number.toString().split("")
    let total = 0
    for(let i = 0; i< nArray.length; i++){
        total += Number(nArray[i]) ** 3
    }

    if(total === number){
        return true
    }
    return false
}
// console.log(checkIfPrime(153));
// input

let number = 153
if(checkIfPrime(number) && checkIfArmstrong(number)){
    console.log("TRUE");
}
else{
    console.log("FALSE");
}