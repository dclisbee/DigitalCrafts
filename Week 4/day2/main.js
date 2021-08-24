const container = document.querySelector(".main-container")
const input = document.querySelector(".input");
const submitButton = document.querySelector(".submit-button");
const word = document.createElement("p");
const secondaryCont = document.querySelector(".secondary-div");
var items = []

function alertMe() {
    const valueOfInput = input.value;
    word.innerHTML = valueOfInput;
    console.log("this is valueOfInput", valueOfInput);
    items.push(valueOfInput);
    console.log(items);
    
    for (let index = 0; index < items.length; index++) {
        const newP = document.createElement("p");
        const element = items[index];
        const newContent = document.createTextNode(element)
        newP.appendChild(newContent);
        const currentDiv = document.getElementById("myList");
        document.body.insertBefore(newP, currentDiv);
    }
  }

const strings = items.map((o) => JSON.stringify(o));
console.log(strings);


function successMessage() {
    alert("Item has been added!");
  }

submitButton.addEventListener("click", () => {
        successMessage();
        alertMe();
        
        console.log("I got clicked");
      });

      