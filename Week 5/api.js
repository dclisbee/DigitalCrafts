// const riotKey = "RGAPI-ab0a1f1d-9af9-407a-bd2d-e8ab94f6e953";
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

//     const link = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/$(name)?$(riotKey)`;
//     const response = await fetch(link);
//     let data = await response.json();
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

async function champions(champ){
    const champPic = document.createElement("img");
    const champText = document.createElement("p");
    const picContainer = document.querySelector(".c");
    
let champion = champ
const specChamp = await fetch("http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion/" + champion + ".json")
specChamp.json();
crd = specChamp["data"];
selectChamp = crd[champion]+crd["blurb"];
console.log(selectChamp);
champId = specChamp[champion]["key"];
const champImgFull = await fetch("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/" + champId)
const jsonChampImg = await champImgFull.json();
champPic.src = jsonChampImg.image;
picContainer.append(champPic);
return jsonChampImgFull;

}

champions("Aatrox");




// async function fetchData(){
//     sumName = document.getElementsByClassName(".input").value;
//     url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + sumName + "?api_key=" + key();
//     const allData = await fetch(url);
//     const jsonData = await data.json();
//     return jsonData;
// }

// const submitButton = document.querySelector(".submit");
// const input = document.querySelector(".input");
// submitButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log();
//     fetchData();
// })
