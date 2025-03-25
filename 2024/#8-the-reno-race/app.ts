// url: https://adventjs.dev/en/challenges/2024/8

function drawRace(indices: number[], length: number): string {
  let result: string = "";

  let lanes: string[] = [];
  const reindeerPositions: number[] = [];
  for (let i = 0; i < indices.length; i++) {
    if (indices[i] < 0) {
      reindeerPositions.push(length + indices[i]);
    } else {
      reindeerPositions.push(indices[i]);
    }

    let lane: string = "";
    for (let k = 0; k < length; k++) {
      if (k == reindeerPositions[i] && reindeerPositions[i] != 0) {
        lane += "r";
        continue;
      }

      lane += "~";
    }

    lane = " ".repeat(indices.length - (i + 1)) + lane + ` /${i + 1}`;
    lanes.push(lane);
  }
  result = lanes.join("\n");

  return result;
}

console.log(drawRace([0, 5, -3], 10));
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8));
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log(drawRace([3, 7, -2], 12));
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/
