
fetch('config.json').then(function (config) {
    console.log('API key:', config.apiKey);
});

async function getChampPic(){

    const champContainer = document.querySelector(".champ-img")
    const champDetail = document.createElement("p");

    const champDetails = await fetch("http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion.json")
    console.log(champDetails);
    champContainer.append(champDetail);
    return champDetails;
}

console.log("hello");
getChampPic();