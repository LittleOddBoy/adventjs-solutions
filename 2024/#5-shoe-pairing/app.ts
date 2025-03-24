// url: https://adventjs.dev/en/challenges/2024/5

type Shoe = {
  type: "I" | "R";
  size: number;
};

// I must thank Anthropic Claude 3.5 for generating this.
function organizeShoes(shoes: Shoe[]): number[] {
  let pairOfShoes: number[] = [];

  // store left and right shoes' sizes in two different arrays
  let lefts: number[] = [];
  let rights: number[] = [];
  for (const shoe of shoes) {
    if (shoe.type == "I") {
      lefts.push(shoe.size);
      continue;
    }

    rights.push(shoe.size);
  }

  // pair the shoes (the ugliest code I have written)
  for (const leftShoe of lefts) {
    const rightShoeIndex: number = rights.findIndex(
      (shoe) => shoe === leftShoe
    );
    if (rightShoeIndex === -1) continue;

    pairOfShoes.push(leftShoe);
    rights.splice(rightShoeIndex, 1);
  }

  return pairOfShoes;
}

const shoes: Shoe[] = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];
console.log(organizeShoes(shoes));
// [38, 42]

const shoes2: Shoe[] = [
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 38 },
];
console.log(organizeShoes(shoes2));
// [38, 38]

const shoes3: Shoe[] = [
  { type: "I", size: 38 },
  { type: "I", size: 41 },
  { type: "I", size: 43 },
  { type: "R", size: 42 },
  { type: "R", size: 36 },
];
console.log(organizeShoes(shoes3));
// []
