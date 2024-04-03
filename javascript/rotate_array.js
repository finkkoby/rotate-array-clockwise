function rotateArray(arr, k) {
  answer = [...arr]
  for (let i = 0; i < k; i++) {
    answer = [answer[answer.length - 1]].concat(answer.slice(0, arr.length - 1))
  }
  return answer
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("Expecting: [3, 4, 5, 6, 1, 2]");
  console.log("=>", rotateArray([1, 2, 3, 4, 5, 6], 4));

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
