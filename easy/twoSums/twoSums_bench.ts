import { twoSum } from "./twoSums.ts";

// Simple benchmark with a small array
Deno.bench("twoSum - Small Array", () => {
  twoSum([2, 7, 11, 15], 9);
});

const largeArray = Array.from({ length: 10_000 }, () =>
  Math.floor(Math.random() * 1_000_000)
);
const index1 = Math.floor(Math.random() * 10_000);
let index2 = Math.floor(Math.random() * 10_000);
while (index1 === index2) {
  index2 = Math.floor(Math.random() * 10_000);
}

const target = largeArray[index1] + largeArray[index2]; // Guaranteed solution

// Benchmark with a large array
Deno.bench("twoSum - Large Array", () => {
  twoSum(largeArray, target);
});
