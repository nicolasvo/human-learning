// Isogram

// function isIsogram(str) {
//   return new Set(str.toLowerCase().split('')).size == str.length;
// }
//
// console.log(isIsogram("ab"));
//

// Duplicate

// function duplicateCount(text) {
//   let array = text.toLowerCase().split('')
//   let setDuplicate = new Set();
//   let result = new Array();
//
//   array.forEach(function(letter) {
//     if (setDuplicate.has(letter)) {
//       result.push(letter);
//     } else {
//       setDuplicate.add(letter);
//     }
//   });
//   return new Set(result).size;
// }
//
// console.log(duplicateCount("aaabbcde"));

// Morse

// MORSE_CODE = {
//     ".-": "A",
//     "-...": "B",
//     "-.-.": "C",
//     "-..": "D",
//     ".": "E",
//     "..-.": "F",
//     "--.": "G",
//     "....": "H",
//     "..": "I",
//     ".---": "J",
//     "-.-": "K",
//     ".-..": "L",
//     "--": "M",
//     "-.": "N",
//     "---": "O",
//     ".--.": "P",
//     "--.-": "Q",
//     ".-.": "R",
//     "...": "S",
//     "-": "T",
//     "..-": "U",
//     "...-": "V",
//     ".--": "W",
//     "-..-": "X",
//     "-.--": "Y",
//     "--..": "Z",
//     "-----": "0",
//     ".----": "1",
//     "..---": "2",
//     "...--": "3",
//     "....-": "4",
//     ".....": "5",
//     "-....": "6",
//     "--...": "7",
//     "---..": "8",
//     "----.": "9"
// };

// function decodeMorse(morseCode) {
//   let result = "";
//   morseCode.trim().split(/\s{1}/).forEach(function(code) {
//     if (code) {
//       result += MORSE_CODE[code];
//     }
//     else {
//       result += " ";
//     }
//   });
//   result = result.replace(/\s+/g, " ");
//   console.log(result);
//   return result;
// }

// function decodeMorse(morseCode) {
//   return morseCode.trim().split(' ').map(code => MORSE_CODE[code] || ' ').join('').replace(/\s+/g, ' ');
// }
//
// let test = " .... . -.--                       .--- ..- -.. .";
// console.log(decodeMorse(test));;

// Odd int

// function findOdd(A) {
//   let array = A;
//   let ints = new Set(array);
//   let result = 0;
//   ints.forEach(function (int) {
//     let counter = 0;
//     // console.log(int);
//     array.forEach(function (elt) {
//       // console.log("Element", elt);
//       if (elt === int) {
//         counter++;
//       }
//     });
//     if (counter % 2 !== 0) {
//       result = int;
//     }
//   });
//   console.log("Result:", result);
//   return result;
// }
//
// let test = [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5];
// findOdd(test);


// High and low


// function highAndLow(numbers) {
//   const array = numbers.split(' ').map(function (elt) {
//     return parseInt(elt);
//   });
//   const sortedArray = array.sort(((a, b) => b - a));
//   console.log((sortedArray[0] + " " + sortedArray.slice(-1)[0]));
//   return sortedArray[0] + " " + sortedArray.slice(-1)[0];
// }

// function highAndLow(numbers) {
//   let arr = numbers.split(' ').map(Number);
//   const max = Math.max.apply(null, arr);
//   const min = Math.min.apply(null, arr);
//   console.log((max + " " + min));
//   return max + " " + min;
// }
//
// const test = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";
// highAndLow(test);


// function findNextSquare(sq) {
//   let result = Math.sqrt(sq);
//   if (!Number.isInteger(result)) {
//     return -1;
//   }
//   else {
//     do {
//       sq++;
//     } while (!Number.isInteger(Math.sqrt(sq)));
//     console.log(sq);
//     return sq;
//   }
// }

// function findNextSquare(sq) {
//   let sqrt = Math.sqrt(sq);
//   return sqrt % 1 ? -1 : ++sqrt * sqrt;
// }
//
// let test = 121;
// findNextSquare(test);


// Walk


// function isValidWalk(walk) {
//
//   let x = 0, y = 0;
//
//   if (walk.length === 10) {
//     walk.forEach(function (direction) {
//       switch (direction) {
//         case "n":
//           x++;
//           break;
//         case "s":
//           x--;
//           break;
//         case "w":
//           y++;
//           break;
//         case "e":
//           y--;
//           break;
//       }
//     });
//
//     if (x===0 && y===0) {
//       return true;
//     }
//   }
//   return false;
// }
//
// let test = ['w', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 'e'];
// console.log(isValidWalk(test));;

// Digital root

function digital_root(n) {

}

let test = 42;
digital_root(456);