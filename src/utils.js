// Your code here
export function pointsForWord(word) {
  let points = 0;
  for (const char of word.toLowerCase()) {  // Convert to lowercase to handle case sensitivity
    if (/[aeiou]/.test(char)) {
      points += 1;
    } else if (/[a-z]/.test(char)) {  // Ensure we only count letters
      points += 2;
    }
  }
  return points;
}



