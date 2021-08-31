

async function fetchData(){
    apiKey = "ff1cadec65d9f10c3aafc2a01b14612c";
    inputVal = document.getElementsByClassName(".input").value;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    const data = await fetch(url);
    const jsonData = await data.json();
    console.log(JSON.stringify(jsonData));   
    alert(inputVal);
    return jsonData;
}
// let input = 
const submitButton = document.querySelector(".submit")
const form = document.querySelector(".input");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log();
    fetchData();
    
});
    
