// Write a function to return the maximum occurring character in the input string e.g., if input string is "Test" then function should return 't'.
// Note: capital letter 'T' and small letter 't' should count as the same.

// function string(strings) {
//     const arr = strings.split('');
//     // console.log(arr);
//     let max = '';
//     let maxChar = '';

//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];

//         // console.log(arr[index])
//         // if (element == maxChar) {
//         //     max = arr[index]
//         // }

//     }
//     console.log(max)


// }

// function maxRecurringChar(string) {
//     let text = string;
//     let charMap = {}
//     let maxCharValue = 0
//     let maxChar = ''
//     for (let char of text) {
//         if (charMap.hasOwnProperty(char)) {
//             charMap[char]++
//         } else {
//             charMap[char] = 1
//         }
//     }
//     for (let char in charMap) {
//         if (charMap[char] > maxCharValue) {
//             maxCharValue = charMap[char]
//             maxChar = char
//         }
//     }
//     console.log(maxChar)
//     return maxChar
// }

// str1 = "holddogecoinkek"
//     // result: o
// str2 = "aahhanotheralgo"
//     // result: a
// str3 = "randywhyyyyy"
//     // result: y
// maxRecurringChar(str1);


// function maxChar(str) {
//     const charMap = {};
//     let max = 0;
//     let maxChar = '';
//     for (let char of str) {
//         if (charMap[char]) {
//             charMap[char]++;
//         } else {
//             charMap[char] = 1;
//         }
//     }
//     for (let char in charMap) {
//         if (charMap[char] > max) {
//             max = charMap[char];
//             maxChar = char;
//         }
//     }
//     console.log(maxChar);
//     return maxChar;
// }


// str1 = "holddogecoinkek"
//     // result: o
// str2 = "aahhanotheralgo"
//     // result: a
// str3 = "randywhyyyyy"
//     // result: y
// maxChar(str1);


//  Given an array of numbers and a stand alone number, return all combinations of numbers in the array that add up to the stand alone number.


// Result: [ 5, -2 ], [ 3, 0 ], [ -2, 5 ], [ 0, 3 ]


// function function2() {
//     let array = [2, 5, 8, 3, -2, 9, 0]
//     let targetSum = 3
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         // console.log(element)
//         for (let index = 0; index < array.length; index++) {
//             const element2 = array[index + 1];
//             // console.log(element2)
//             if (element + element2 == targetSum) {
//                 console.log(element + ", " + element2)
//             }
//         }

//     }
// }
// function2();



// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// For example, if N = 8, the function should return the number '34' which is the 8th index of the Fibonacci sequence


// result: 13

function function3(N) {
    let list = [1, 1]
    for (let index = 0; index < N + 1; index++) {
        if (index = list.length - 1) {
            list.push(list[index - 1] + list[index])
                // console.log(list)
        }

    }
    console.log(list[N])

}
N = 8
function3(N)