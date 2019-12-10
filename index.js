// Your code goes here
const textEle = document.querySelector("#text")
console.log(textEle)
// console.log("L3")
textEle.textContent =
  "JavaScript is so cool. It lets me add text to my page programmatically.";
// console.log("L4");

document.addEventListener("DOMContentLoaded", function() {
  // console.log(
  //   "JavaScript is so cool. It lets me add text to my page programmatically."
  // );
  textEle.textContent = "This is really cool!";
});
// console.log(
//   "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
// );