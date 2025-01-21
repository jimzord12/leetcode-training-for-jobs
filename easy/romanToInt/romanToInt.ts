function romanToInt(s: string): number {
  const romanToIntMap = new Map<string, number>();
  romanToIntMap.set("I", 1);
  romanToIntMap.set("V", 5);
  romanToIntMap.set("X", 10);
  romanToIntMap.set("L", 50);
  romanToIntMap.set("C", 100);
  romanToIntMap.set("D", 500);
  romanToIntMap.set("M", 1000);

  let finalNumber = 0;
  let skip = false;

  const a = s.split("");

  for (let i = 0; i < a.length; i++) {
    if (skip) {
      skip = false;
      continue;
    }
    const nextLetter = romanToIntMap.get(a[i + 1])!;
    const currentLetter = romanToIntMap.get(a[i])!;
    console.log(i, " Current: ", currentLetter);
    console.log(i, " Current: ", a[i]);
    console.log(i, " Next: ", nextLetter);
    console.log(i, " Next: ", a[i + 1]);

    // edge case
    if (nextLetter > currentLetter) {
      finalNumber += nextLetter - currentLetter;
      skip = true;
    } else {
      finalNumber += currentLetter;
    }
    console.log("Final Num: ", finalNumber);
  }

  return finalNumber;
}

function romanToInt_V2(s: string): number {
  const romanToIntMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanToIntMap[s[i]];
    const next = romanToIntMap[s[i + 1]];

    if (next && current < next) {
      total += next - current;
      i++; // Skip the next character
    } else {
      total += current;
    }
  }

  return total;
}

console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
