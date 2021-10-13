// string1 = "A gentleman";
// string2 = "Elegant man";
// //expected result: true

// string3 = "Clint Eastwood";
// string4 = "Old West action";
// //expected result: true

// string5 = "idontlikealgos";
// string6 = "algoverybad";
// //expected result: false

// str5 = [...string5];
// str6 = [...string6];
// let counter = 0;
// if ((str5.length = str6.length)) {
// 	for (let index = 0; index < str5.length; index++) {
// 		const element = str5[index];
// 		for (let index = element + 1; index < str6.length; index++) {
// 			const element2 = str6[index];
// 			if (element2 == element) {
// 				counter += 1;
// 				break;
// 			}
// 		}
// 		if ((counter = str5.length)) {
// 			return console.log(true);
// 		} else {
// 			return console.log(false);
// 		}
// 	}
// }

// write a function that capitalizes the first character of every word in a string

// phrase1 = "randy doesnt like giving algos";
// phrase2 = "arent you glad its friday";
// phrase3 = "i wonder whats for lunch today";

// const words = phrase1.split(" ");
// for (let i = 0; i < words.length; i++) {
// 	words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }
// console.log(words);

//Write a function that finds the missing number in a given integer array

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// //expect result: 9
// let counter = 1;
// for (let index = 0; index < arr1.length; index++) {
// 	const element = arr1[index];
// 	if (element == counter) {
// 		counter++;
// 		continue;
// 	} else {
// 		return console.log(counter);
// 	}
// }

// K = |i − j| = |A[i] − A[j]|
A = [2, 2, 2, 1];
let K = 0;
for (let i = 0; i < A.length; i++) {
	const element = A[i];
	for (let j = 0; j < A.length; j++) {
		if (i == j) {
			continue;
		} else {
			if (Math.abs(i - j) == Math.abs(A[i] - A[j])) {
				K = Math.abs(i - j);
			} else {
				continue;
			}
		}
	}
}
console.log(K);
