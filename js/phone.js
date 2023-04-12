window.addEventListener("load", () => {
  console.log("inside phone.js for footer"); //for list of some images
  let img_container = document.getElementById("lastItemFtr");
  let logo_container = document.getElementById("otherNavbarPhone2");
  const arrList = [
    "../images/home.png",
    "../images/media.png",
    "../images/group1.png",
    "../images/bell.png",
    "../images/menuBars.png",
  ];
  let data = "";
  for (let i = 0; i < arrList.length; i++) {
    // arrList
    data += genImg1(arrList[i]);
  }

  console.log("inside phone.js for navbar"); //for list of some images

  const arrList1 = [
    "../images/facebook.png",
    "../images/liveShow.png",
    "../images/music.png",
    "../images/media.png",
    "../images/food.png",
    "../images/search1.png",
  ];
  let data1 = "";
  for (let i = 0; i < arrList1.length; i++) {
    // arrList
    data1 += genLogoNavbar(arrList1[i]);
  }
  img_container.innerHTML = data;
  logo_container.innerHTML = data1;
});

//list of images
const genImg1 = (imgUrl) => {
  return `<div id="" class="extraImgClass">
    <img src="${imgUrl}" alt="" class="img-story1" />
    </div>`;
};
const genLogoNavbar = (imgUrl) => {
  return `<div id="" class="extraImgClass">
  <img src="${imgUrl}" alt="" class="img-story1" />
  </div>`;
};
