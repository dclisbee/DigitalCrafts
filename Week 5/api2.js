apiKey = "abfaee7ed04842728e21ab00744193da";

async function fetchData(){
    url = "https://newsapi.org/v2/everything?q=gaming&from=2021-08-31&to=2021-08-31&sortBy=popularity?country=us&apiKey=6acaa9b934d54b039a523d604ed51b38"
    const data = await fetch(url);
    const jsonData = await data.json();
    console.log(jsonData);
    const container = document.querySelector(".c");
    for(let article in jsonData.articles){
      const div = document.createElement("div");
      const sources = document.createElement("h2");
      const author = document.createElement("h4");
      const description = document.createElement("p");
      const pageURL = document.createElement("link")
      const image = document.createElement("img")
      div.className = "article";
        sources.innerText = article;
        // author.innerText = jsonData[`${article}`].author;
        console.log(jsonData.articles[article])
        description.innerText = jsonData.articles[article].description;
        sources.innerText = jsonData.articles[article].title;
        author.innerText = jsonData.articles[article].author;
        pageURL.src = jsonData.articles[article].url;
        image.onclick = function() {
          window.location.href = pageURL.src;
        }



      image.src = jsonData.articles[article].urlToImage;
      div.append(image, sources, author, description);
      container.append(div);
        



    }

}
fetchData();