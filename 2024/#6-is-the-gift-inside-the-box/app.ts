// url: https://adventjs.dev/en/challenges/2024/6

// fun fact: I was trying to do this *without RegEx* but seems like the RegEx approach is one of the best approaches! thanks to this repo: https://github.com/hozlucas28/AdventJS-Solutions-2024
function inBox(box: string[]): boolean {
  const regex: RegExp = new RegExp(/^# *\* *#$/g);

  let i: number;
  let line: string;

  for (i = 1; i < box.length - 1; i++) {
    line = box[i];
    if (regex.test(line)) return true;
  }

  return false;
}

console.log(inBox(["###", "#*#", "###"])); // ➞ true

// my additional test btw
console.log(inBox(["#*#", "# #", "###"])); // ➞ false

// my second additional test btw
console.log(inBox(["###", "# #", "#*#"])); // ➞ false

console.log(inBox(["####", "#* #", "#  #", "####"])); // ➞ true

console.log(inBox(["#####", "#   #", "#  #*", "#####"])); // ➞ false

console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"])); // ➞ false
