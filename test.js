// const x = 1;
// const y = 2;

// function callMeAfter2Sec(){
//     console.log('Hii Iam inside function');
// }

// setTimeout(callMeAfter2Sec,2000)


// timeout_vs_immediate.js
// setTimeout(() => {
//   console.log('timeout');
// }, 0);

// setImmediate(() => {
//   console.log('immediate');
// });


// timeout_vs_immediate.js
const fs = require('node:fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});

