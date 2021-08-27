
var inputVal = document.getElementById(".input").value;
async function fetchData(inputVal2){
    apiKey = "ff1cadec65d9f10c3aafc2a01b14612c";
    
    url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal2}&appid=${apiKey}&units=metric`;
    const data = await fetch(url);
    const jsonData = await data.json();
    console.log(JSON.stringify(jsonData));   
    
    return jsonData;
}
// let input = 
const submitButton = document.querySelector(".submit")
const form = document.querySelector(".top-banner form");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    fetchData(inputVal);
});
    
