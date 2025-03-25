// url: https://adventjs.dev/en/challenges/2024/7

// Oh my Lord, is there any word that could describe how much I miss "recursive solutions"? Certainly not...
// P.S.: It got 3 stars btw. there must be a better solution, but I loved it so idc.
function fixPackages(packages: string): string {
  // If there are no parentheses left, return the string
  if (!packages.includes("(")) {
    return packages;
  }

  // Find the innermost "("
  let innermostStartIndex = packages.lastIndexOf("(");

  // Find the corresponding ")"
  let innermostEndIndex = packages.indexOf(")", innermostStartIndex);

  // Extract and reverse the content inside
  let reversedText = packages
    .slice(innermostStartIndex + 1, innermostEndIndex)
    .split("")
    .reverse()
    .join("");

  // Replace the parentheses and content with the reversed text
  let correctedPackages =
    packages.slice(0, innermostStartIndex) +
    reversedText +
    packages.slice(innermostEndIndex + 1);

  // Recursively process any remaining parentheses
  return fixPackages(correctedPackages);
}

console.log(fixPackages("a(cb)de"));
// ➞ "abcde"
// We reverse "cb" inside the parentheses

console.log(fixPackages("a(bc(def)g)h"));
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

console.log(fixPackages("abc(def(gh)i)jk"));
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

console.log(fixPackages("a(b(c))e"));
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb"
