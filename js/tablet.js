window.addEventListener("load", () => {
  console.log("inside tablet.js");
  let img_container = document.getElementById("photoShow");

  //for list of images
  const arrList = [
    "../images/home.png",
    "../images/createPost.png",
    "../images/recipe-chinesefood.png",
    "../images/candle.jpg",
    "../images/events.png",
    "../images/saved.png",
    "../images/gaming.png",
    "../images/fundraisers.png",
    "../images/memories.png",
    "../images/getMoreInfo.png",
    "../images/settings.png",
    "../images/seeMore.png",
    "../images/search1.png",
    "../images/menuBars.png",
  ];
  let data = "";
  for (let i = 0; i < arrList.length; i++) {
    // arrList
    data += genImg(arrList[i]);
  }

  img_container.innerHTML = data;
});

//list of images
const genImg = (imgUrl) => {
  return `<div  class="extraImgClass">
    <img src="${imgUrl}" alt="" class="img-story1" />
    </div>`;
};
