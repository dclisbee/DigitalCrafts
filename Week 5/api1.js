// async function champions(){
//     const champPic = document.createElement("img");
//     const champText = document.createElement("p");
//     const picContainer = document.querySelector(".c");

// let champion = document.getElementById("myInput").value;
// const specChamp = await fetch("http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion/" + champion + ".json")
// const jsonChamp = specChamp.json();
// crd = jsonChamp["data"];
// selectChamp = crd[champion]+crd["blurb"];
// console.log(selectChamp);
// champId = jsonChamp[champion]["key"];
// const champImgFull = await fetch("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/" + champId)
// const jsonChampImg = await champImgFull.json();
// champPic.src = jsonChampImg.image;
// picContainer.append(champPic);
// return jsonChampImg;
// }

// champions();

// let array = [];

const fetchChamps = async () => {
    const data = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/9.19.1/data/en_US/champion.json"
    );
    const json = await data.json();
    console.log(json);
    const container = document.querySelector(".c");
    for (let champ in json.data) {
      const div = document.createElement("div");
      const image = document.createElement("img");
      const name = document.createElement("h1");
      const lore = document.createElement("p");
      div.className = "champcard";
      div.id = champ.name;
      image.src = 
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
        champ +
        "_0.jpg";
      
        
      
      name.innerText = champ;
      lore.innerText = json.data[`${champ}`].blurb;
      div.append(name, lore, image);
      container.append(div);
      
    }
  };
  fetchChamps();
  // focus to bring down to champ


  const submitButton = document.querySelector(".submit");
  const input = document.querySelector(".input");
  function scrollToChamp(){
    let champion = document.getElementById("myInput").value;
    
    champId = fetchChamps().champ;
    console.log(champion);
    document.getElementById(champId).scrollIntoView();
  }

  submitButton.addEventListener("click", (e) => {
        scrollToChamp();
        e.preventDefault();

  })
