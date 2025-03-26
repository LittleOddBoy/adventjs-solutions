// url: https://adventjs.dev/en/challenges/2024/9

type Board = string[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

type EnginePosition = {
  x: number;
  y: number;
};

// Honestly, my first solutions are all language-agnostic. I write TypeScript like I'm writing C. Then, I check the AI's solution and there it is! There is always a native JavaScript function that I missed just because I'm too lazy to recheck MDN! You wanna know who is the dumbest coder in all times? Here is his GitHub username => @LittleOddBoy
function moveTrain(board: Board, mov: Movement): Result {
  // Find train engine
  let y = board.findIndex((row) => row.includes("@")); // How can I forget the existence of this method????????
  if (y === -1) return "none"; // Safety check (never will happen, btw)
  let x = board[y].indexOf("@");
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^ three lines and I had written a for-loop for these lines in the past...

  // changes the movements will make
  const moves = { L: [0, -1], R: [0, 1], U: [-1, 0], D: [1, 0] };
  const [dy, dx] = moves[mov];
  const newY = y + dy;
  const newX = x + dx;

  // Check if the move will cause the engine to hit the boundaries
  if (newY < 0 || newY >= board.length || newX < 0 || newX >= board[0].length)
    return "crash";

  // Get the target position
  const nextPos = board[newY][newX];

  if (nextPos === "o") return "crash";
  if (nextPos === "*") return "eat";

  // Nothing really exciting happened, so we return none
  return "none";
}

const board = ["·····", "*····", "@····", "o····", "o····"];

console.log(moveTrain(board, "U"));
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

console.log(moveTrain(board, "D"));
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, "L"));
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, "R"));
// ➞ 'none'
// The train moves to the right and there is empty space on the right
