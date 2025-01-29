// import { assertEquals } from "jsr:@std/assert/equals";
// import { isPalindrome_V1, isPalindrome_V2 } from "./palindromeNumber.ts";

// interface Test {
//   [key: string]: [number, boolean];
// }

// const tests: Test = {
//   test_1: [121, true],
//   test_2: [123454321, true],
//   test_3: [0, true],
//   test_4: [11, true],
//   test_5: [123, false],
//   test_6: [-121, false],
//   test_7: [-123454321, false],
//   test_8: [-123, false],
// };

// // for (const test of Object.entries(tests)) {
// //   Deno.test(`In: ${test[0]}, Expected: ${test[1]}`, () => {
// //     assertEquals(isPalindrome_V1(test[1][0]), test[1][1]);
// //   });
// // }

// for (const test of Object.entries(tests)) {
//   Deno.test(`In: ${test[0]}, Expected: ${test[1]}`, () => {
//     assertEquals(isPalindrome_V2(test[1][0]), test[1][1]);
//   });
// }
