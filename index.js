const names = ["Ada", "Brendan", "Ali"];

function writeCards(arr, str) {
  const messages = []
  for (let i = 0; i < names.length; i++) {
    console.log(i)
    messages.push(`Thank you, ${arr[i]}, for the wonderful ${str} gift!`);
  }
  return messages
}

function countdown(num) {
  while(num > 0) {
    console.log(num);
    num--;
  }
  console.log(num)
}