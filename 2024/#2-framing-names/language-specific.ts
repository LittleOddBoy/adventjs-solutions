// url: https://adventjs.dev/challenges/2024/2

function createFrame(names: string[]): string {
  let longestLength = Math.max(0, ...names.map(name => name.length));
  let yStroke = "*".repeat(longestLength + 4);

  let lines = names.map(name => `* ${name.padEnd(longestLength, " ")} *`);
  
  return [yStroke, ...lines, yStroke].join("\n");
}


console.log(createFrame(["midu", "madeval", "educalvolpz"]));

// Expected result:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrame(["midu"]));

// Expected result:
// ********
// * midu *
// ********

console.log(createFrame(["a", "bb", "ccc"]));

// Expected result:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

console.log(createFrame(["a", "bb", "ccc", "dddd"]));
