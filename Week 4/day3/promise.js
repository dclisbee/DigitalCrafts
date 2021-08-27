async function getFoxPics() {
    // create a variable
    // await fetch(***URL GOES IN HERE***)
    // must convert it to json data
    const foxContainer = document.querySelector(".fox-images");
    const foxPic = document.createElement("img");
    const foxParagraph = document.createElement("a");
  
    const foxPics = await fetch("https://randomfox.ca/floof/");
    const jsonfoxs = await foxPics.json();
    console.log(jsonfoxs);
    foxParagraph.href = jsonfoxs.link;
    foxParagraph.innerText = "Fox Pic";
    foxPic.src = jsonfoxs.image;
    foxPic.height = "400";
    foxPic.width = "600";
    foxContainer.append(foxPic, foxParagraph);
    return jsonfoxs;
  }
  const foxButton = document.querySelector(".get-fox-button");
  foxButton.addEventListener("click", () => getFoxPics());