let str1 = "kayak"
let str2 = "backendisawesome"
let str3 = "mom"


function checkString(input){
    let count = -1
    for (let index = 0; index < input.length/2; index++) {
        // if (input[index] = input[count]){
        //     console.log(input[index])
        //     count--
        //     if(input.length/2 == index + 1){
        //         console.log("palindrome")

        //     }
        // }

        for (let i = 0; i < input.length/2; i++) {
            if (input[i] !== input[input.length - 1 - i]) {
                return false;
            }
          }
          return true
          
           
    }
            
}


checkString(str1)