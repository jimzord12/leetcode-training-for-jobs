import { assertEquals } from "jsr:@std/assert";
import { twoSum } from "./twoSums.ts";

interface Test {
  nums: number[];
  target: number;
  expected: number[];
}

interface MyTest {
  [key: string]: [number[], number, number[]];
}

const tests: MyTest = {
  test_1: [[2, 7, 11, 15], 9, [0, 1]],
  test_2: [[3, 2, 4], 6, [1, 2]],
  test_3: [[3, 3], 6, [0, 1]],
};

let counter = 1;
for (const test of Object.values(tests)) {
  Deno.test(`Test #${counter}`, () => {
    assertEquals(twoSum(test[0], test[1]), test[2]);
  });
  counter++;
}

// Function to generate a random integer within a range
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random test case with an injected solution
function generateTestCase(howMany: number): Test[] {
  const testCases: Test[] = [];

  while (testCases.length < howMany) {
    const length = randomInt(2, 10_000); // Array length between 2 and 10^4
    const nums = Array.from({ length }, () => randomInt(-1e9, 1e9));

    // Inject a valid solution
    const index1 = randomInt(0, length - 1);
    let index2 = randomInt(0, length - 1);
    while (index2 === index1) {
      index2 = randomInt(0, length - 1);
    }

    const sum = randomInt(-1e9, 1e9); // 500
    nums[index1] = randomInt(-1e9, 1e9);
    nums[index2] = sum - nums[index1];

    testCases.push({
      nums,
      target: sum,
      expected: [index1, index2].sort((a, b) => a - b),
    });
  }

  return testCases;
}

const numOfTests = 1000;

// Testing my Implementation
generateTestCase(numOfTests).forEach((testCase, index) =>
  Deno.test("Test Case #" + index, () => {
    const output = twoSum(testCase.nums, testCase.target);
    try {
      const num1 = testCase.nums[output[0]];
      const num2 = testCase.nums[output[1]];

      // Check if the selected numbers satisfy the target and use distinct indices
      assertEquals(num1 + num2, testCase.target);
      if (output[0] === output[1]) {
        throw new Error("Same index used twice");
      }
    } catch (err) {
      console.log("Number #1: ", testCase.nums[output[0]]);
      console.log("Number #2: ", testCase.nums[output[1]]);
      console.log(
        "Satisfy Target?: ",
        testCase.target === testCase.nums[output[0]] + testCase.nums[output[1]]
      );
      console.log("Output Indices:", output);
      console.log("Expected Indices:", testCase.expected);
      throw err;
    }
  })
);
