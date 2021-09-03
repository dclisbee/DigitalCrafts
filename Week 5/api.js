
// const sp = "%20";
// // var require : NodeRequire;
// // const requireStack = require("require-stack")

// getMatchList(fetchSumByName("Aquo", "accountId"));

// async function getMatchList(accId, champID, queue, endTime, beginTime, endIndex, beginIndex){

// let link = "https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/" + await accId + "?";
// if(champID != null){
//     link += "champion=" + champID + "&";}
// if(queue != null){
//     link += "queue=" + queue + "&";}
// if(endTime != null){
//     link += "endTime=" + endTime + "&";}
// if(beginTime != null){
//     link += "beginTime=" + beginTime + "&";}
// if(endIndex != null){
//     link += "endIndex=" + endIndex + "&";}
// if(beginIndex != null){
//     link += "beginIndex=" + beginIndex + "&";}

// link += riotKey;

// let response = await fetch(link);
// response = await response.json();
// console.log(response.matches[0].champion);

// }



// async function fetchSumByName(name, ch){
//     while(name.includes(" ")){
//         let space = name.indexOf(" ");
//         name = name.substring(0,space) + sp + name.substring(space+1);

//     }

//     const link = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/$(name)?$(riotKey)`);
//     let data = await link.json();
//     if(ch == "id"){
//         console.log("wrong one reached");
//     }else if(ch == "accountId"){
//         return data.accountId;
//     }else if(ch == "puuuid"){
//         return data.puuuid;
//     }else if(ch == "name"){
//         return data.name;
//     }else if(ch == "profileIconId"){
//         return data.profileIconId;
//     }else if(ch == "revisionDate"){
//         return data.revisionDate;
//     }else if(ch == "summonerLevel"){
//         return data.summonerLevel;
//     }else{
//         console.log("ch is not valid");
//         return null;
//     }

// }

// const submitButton = document.querySelector(".submit");
// const input = document.querySelector(".input");
// async function fetchData(){
//     //sumName = document.getElementsByClassName(".input").value;
 
//     let summoner = document.getElementById("myInput").value;
//     url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summoner + "?api_key=" + riotKey;
//     const allData = await fetch(url);
//     const jsonData = await allData.json();

//     const infoCont = document.querySelector(".c")
//     const text = document.createElement("p")
//     let div = document.createElement("div");
//         div.innerHTML = 'Name: ' + jsonData[PromiseResult].name + ' ' + jsonData[PromiseResult].summonerLevel;
//         c.appendChild(div);
//     return jsonData;
// }


// submitButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(fetchData());
//     fetchData();
// })
