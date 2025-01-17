function isPalindrome(x: number): boolean {
  const a = String(x);
  for (let i = 0; i < a.length; i++) {
    console.log("a[i]: ", a[i]);
    console.log("a.at(i - 1): ", a.at(i - 1));
    console.log("");
    if (a[i] === a.at(i - 1)) continue;
    return false;
  }
  return true;
}

const result = isPalindrome(100);
console.log(result);
