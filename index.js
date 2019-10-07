function writeCards(arr, string) {
    let array = []
    for(let i = 0; i < arr.length; i++) {
        array.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);
    }
    return array;
}

function countdown(num) {
    let count = num;
    while (count >= 0) {
        console.log(count);
        count--;
    }
}