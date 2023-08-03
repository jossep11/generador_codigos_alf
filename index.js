function generateNextCode(currentCode) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let nextCode = currentCode.split("");

  for (let i = nextCode.length - 1; i >= 0; i--) {
    if (nextCode[i] === "Z") {
      nextCode[i] = "A";
    } else {
      nextCode[i] = letters[letters.indexOf(nextCode[i]) + 1];
      break;
    }
  }

  return nextCode.join("");
}

let currentCode = "AACCNE";

// for (let i = 0; i < 1000000; i++) {
// Change the number of elements you want to generate
currentCode = generateNextCode(currentCode);
console.log(currentCode);
// }
