const getDigits = (n: number) => Math.floor(Math.log10(n)) + 1;

// function isValid(s: string): boolean {
//   if (s.length % 2 !== 0) return false;

//   const queque = Array.from(s);
//   const obj: { [key: string]: number } = {
//     "(": 1,
//     ")": -1,
//     "[": 2,
//     "]": -2,
//     "{": 3,
//     "}": -3,
//   };

//   if (obj[s[0]] < 0) return false;

//   while (queque.length > 0) {
//     const cur = obj[queque[0]];
//     const next = obj[queque[1]];
//     const last = obj[queque.at(-1)!];
//     // console.log("Current Symbol: ", cur);
//     // console.log("Next Symbol: ", next);
//     // console.log("Last Symbol: ", last);

//     if (cur + next === 0 && cur > 0) {
//       queque.splice(0, 2);
//     } else if (cur + last === 0 && cur > 0) {
//       queque.pop();
//       queque.splice(0, 1);
//     } else {
//       return false;
//     }

//     //     console.log("\nCurrent Queue: ", queque);
//   }

//   return true;
// }

function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;
  const lifoQueue: string[] = [];
  const mapping: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < s.length; i++) {
    if (mapping[lifoQueue.at(-1)!] === s[i]) {
      lifoQueue.pop();
    } else {
      lifoQueue.push(s[i]);
    }
  }

  return lifoQueue.length === 0;
}

console.log('#2 | ', isValid('()[]{}'));
console.log('-------------------------------------');
console.log('#3 | ', isValid('(]'));
console.log('-------------------------------------');
console.log('#4 | ', isValid('([])'));
console.log('-------------------------------------');
console.log('#5 | ', isValid('(([]){})'));
