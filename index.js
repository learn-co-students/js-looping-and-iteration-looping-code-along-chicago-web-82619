// Code your solutions in this file
function writeCards(names, eventName) {
  let result = [];
  for (let i=0; i< names.length; i++) {
    result.push("Thank you, " + names[i] + ", for the wonderful surprise gift!")
    console.log(result[i])
  }
  return result;
}

function countdown(x) {
  let i = x;
  while(i >= 0) {
    console.log(i)
    i--;
  }
}
