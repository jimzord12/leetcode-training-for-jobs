function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  // Start with the first string as the initial prefix
  let prefix = strs[0];

  // Compare the prefix with each string in the array
  for (let i = 1; i < strs.length; i++) {
    // Shorten the prefix until it matches the current string
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1); // Remove the last character
      if (prefix === "") return ""; // No common prefix
    }
  }

  return prefix;
}

const a = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(a);
console.log("\n-------------------------------------------------\n");
const b = longestCommonPrefix(["flower", "flower", "flower"]);
console.log(b);
console.log("\n-------------------------------------------------\n");
const c = longestCommonPrefix([""]);
console.log(c === "" ? "empty string" : c);
console.log("\n-------------------------------------------------\n");
const d = longestCommonPrefix(["", "b"]);
console.log(d === "" ? "empty string" : d);
console.log("\n-------------------------------------------------\n");
const e = longestCommonPrefix(["eeee", "eeee", ""]);
console.log(e === "" ? "empty string" : e);
