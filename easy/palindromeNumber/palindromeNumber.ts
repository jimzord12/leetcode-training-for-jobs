export function isPalindrome_V1(x: number): boolean {
  const a = String(x);
  if (x < 0) return false;

  for (let i = 0; i < (a.length - 1) / 2; i++) {
    const front = a[i];
    const rear = a[a.length - i - 1];

    if (front === rear) continue;
    return false;
  }
  return true;
}

export function isPalindrome_V2(x: number): boolean {
  if (x < 0) return false;
  return x === Number(String(x).split("").reverse().join(""));
}

export function isPalindrome_V3(x: number): boolean {
  if (x < 0) return false;
  if (x === 0) return true;

  const digits = Math.floor(Math.log10(x) + 1);
  const nums = [];
  for (let i = 1; i <= digits; i++) {
    // const result = Math.trunc(x / Math.pow(10, digits - i));
    const result = x % 10;
    console.log("The Result: ", result);
    nums.push(result);
    x = x - Math.pow(10, digits - i) * result;
  }
  console.log("The Digits: ", digits);
  console.log("The Numbers: ", nums);
  const reversed = [...nums].reverse();
  console.log("The Reversed: ", reversed);

  for (let i = 0; i < nums.length; i++) {
    console.log(`Num's #${i} Element: `, nums[i]);
    console.log(`Reversed's #${i} Element: `, reversed[i]);
    if (nums[i] !== reversed[i]) return false;
  }

  return true;
}

export function isPalindrome_V4(x: number): boolean {
  // Negative numbers and numbers ending with 0 (except 0) are not palindromes
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reversedHalf = 0;

  // Reverse half of the number
  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // For even digits: x == reversedHalf
  // For odd digits: x == Math.floor(reversedHalf / 10)
  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}
