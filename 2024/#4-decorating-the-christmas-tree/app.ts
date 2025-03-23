// url: https://adventjs.dev/en/challenges/2024/4

function createXmasTree(height: number, ornament: string): string {
  let result = "";
  let line = "";
  for (let i = 1; i <= height; i++) {
    line +=
      "_".repeat(height - i) +
      ornament.repeat(i + (i - 1)) +
      "_".repeat(height - i) +
      "\n";

    result += line;
    line = "";
  }

  let endLine = "_".repeat(height - 1) + "#" + "_".repeat(height - 1);
  result += endLine + "\n" + endLine;

  return result;
}

const tree = createXmasTree(5, "*");
console.log(tree);
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
