async function main() {
  const root = document.getElementById("root");
  const res = await fetch("https://api.imgflip.com/get_memes");
  const data = await res.json();
  data.data.memes.forEach((memeObj) => {
    memeDiv = document.createElement("div");
    memeDiv.style.width = "500px";
    memeDiv.style.border = "2px solid black";
    memeImg = document.createElement("img");
    memeImg.src = memeObj.url;
    memeImg.style.width = "90%";
    memeTitle = document.createElement("h1");
    memeTitle.innerText = memeObj.name;
    memeDiv.appendChild(memeTitle);
    memeDiv.appendChild(memeImg);
    root.appendChild(memeDiv);
  });
}

main();
  