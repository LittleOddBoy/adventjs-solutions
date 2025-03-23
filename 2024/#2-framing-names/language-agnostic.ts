// url: https://adventjs.dev/challenges/2024/2

// I don't know why, but the AdventJS compiler fails to test this code. However, it's correct
function createFrameInMyWay(names: string[]): string {
  let result = "";

  // find the longest possible text
  let longestLength: number = Math.max(0, ...names.map((n) => n.length));
  let yStrokeLength: number = longestLength + 4;

  // create the y-stroke
  let yStroke: string = "";
  for (let i = 0; i <= yStrokeLength; i++) {
    yStroke += "*";
  }

  result += yStroke + "\n";

  // create lines and append content
  let line: string = "* ";
  for (let i = 0; i < names.length; i++) {
    // create the padding of name
    let paddingOfName: string = "";
    for (let j = 0; j <= longestLength - names[i].length; j++) {
      paddingOfName += " ";
    }

    // create name with its padding
    let paddedName = names[i] + paddingOfName;

    // create padded line
    let paddedLine = line + paddedName + " *" + "\n";

    // add the line to the result
    result += paddedLine;

    // reset the padded name
    paddedName = "";
  }

  // add end stroke
  result += yStroke;
  return result;
}

console.log(createFrameInMyWay(["midu", "madeval", "educalvolpz"]));

// Expected result:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrameInMyWay(["midu"]));

// Expected result:
// ********
// * midu *
// ********

console.log(createFrameInMyWay(["a", "bb", "ccc"]));

// Expected result:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

console.log(createFrameInMyWay(["a", "bb", "ccc", "dddd"]));
