window.addEventListener("load", () => {
  fetchPics1();
  let post_container = document.getElementById("post_box");
  const NUM_OF_POSTS = 6;
  // lists of contacts
  let list_container = document.getElementById("listSet");
  //this is for general lists
  let list_container1 = document.getElementById("secondItemBox");
  const NUM_OF_LIST = 10;
  //this is for comment section images
  const arrImages = [
    {
      img: "../images/peacock.jpg",
      name: "Tom Russo",
      time: "5 min",
    },
    {
      img: "../images/caffe.jpg",
      name: "Sandy Hosla",
      time: "6 min",
    },
    {
      img: "../images/sunset-in-paris-1447018.jpg",
      name: "Anna Beck",
      time: "9 min",
    },
    {
      img: "../images/peacock.jpg",
      name: "Tom Russo",
      time: "5 min",
    },
    {
      img: "../images/caffe.jpg",
      name: "Dan Brown",
      time: "6 min",
    },
    {
      img: "../images/sunset-in-paris-1447018.jpg",
      name: "Erica Jones",
      time: "5 min",
    },
  ];

  let data = "";
  for (let i = 0; i < NUM_OF_POSTS; i++) {
    data += generatePost({
      img: arrImages[i].img,
      name: arrImages[i].name,
      time: arrImages[i].time,
    });
  }

  //for list of contacts
  const arrList = [
    {
      img: "../images/recipe-chinesefood.png",
      name: "Dennis Han",
    },
    {
      img: "../images/candle.jpg",
      name: "Eric Jonas",
    },
    {
      img: "../images/events.png",
      name: "Cynthia Lopez",
    },
    {
      img: "../images/saved.png",
      name: "Anna Beck",
    },
    {
      img: "../images/gaming.png",
      name: "Aiden Brown",
    },
    {
      img: "../images/fundraisers.png",
      name: "Betty Chen",
    },
    {
      img: "../images/memories.png",
      name: "Dan Brown",
    },
    {
      img: "../images/getMoreInfo.png",
      name: "Henri Cook",
    },
    {
      img: "../images/settings.png",
      name: "Sandy",
    },
    {
      img: "../images/seeMore.png",
      name: "Brandon",
    },
  ];
  let data1 = "";
  for (let i = 0; i < NUM_OF_LIST; i++) {
    // arrList
    data1 += genList({
      img: arrList[i].img,
      name: arrList[i].name,
    });
  }

  post_container.innerHTML = data;
  list_container.innerHTML = data1;
  list_container1.innerHTML = data1;
});

const generatePost = ({ img, name, time }) => {
  return `<div id="" class="contain2Box">
    <div id="" class="lastPartBoxElems1">
      <!--js show all contacts-->
      <div class="lastPartBoxElems" id="extraMP">
        <img src="${img}" alt="" class="img-story" />
        <div class="lastPartBox">
          <span>${name}</span>
          <div class="lastPartBoxElems" id="extraMP">
            <h6>${time}</h6>
            <i class="fa-solid fa-user-group" id="contactsIcon1"></i>
          </div>
        </div>
      </div>
      <!-- div in two and spacebetween -->
      <div class="lastPartBoxElems1">
        <div class="firstItemBoxRight"><a href="#">...</a></div>
      </div>
      <!--js show all contacts-->
    </div>
    <div id="" class="lastPartBoxElems2">
      <img
        src="${img}"
        alt=""
        id="imgPost"
      />
    </div>
    <div id="forComment">
    <div class="extraImgClass">
      <img
        src="../images/thumbnail.png"
        alt="likeButton"
        class="img-story1"
      />
    </div>
    <div class="extraImgClass">
      <img
        src="../images/comment.png"
        alt="likeButton"
        class="img-story1"
      />
    </div>
    <div class="extraImgClass">
      <img
        src="../images/share.png"
        alt="likeButton"
        class="img-story1"
      />
    </div>
  </div>`;
};

//list of contacts
const genList = ({ img, name }) => {
  return `<div id="" class="lastPartBoxElems">
    <img src="${img}" alt="" class="img-story1" />
    <p>${name}</p>
    </div>`;
};
//list of comments
// const genComm = (imgUrl) => {
//   return `<div id="" class="extraImgClass">
//     <img src="${imgUrl}" alt="" class="img-story1" />
//     </div>`;
// };
//random images
//reqest has benn done for 10 images using fetch
function fetchPics1() {
  const NUM_DIS = 10;
  let divC = document.getElementById("middle");
  for (let i = 0; i < NUM_DIS; i++) {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        divC.innerHTML += `<div class="middleBox"><img class="cat_story" src="${data[0].url}" alt="${i}" /></div>`;
      })
      .catch((err) => console.log(err));
  }
}

/*solo per una immagine
function fetchPics() {
  let catsImgDiv = document.querySelector(".catsImgDiv");
  catsImgDiv.innerHTML = "";
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      let catsImgUrl = data[0].url;
      let catImgEl = document.createElement("img");
      catImgEl.setAttribute("src", `${catsImgUrl}`);
      catImgEl.classList.add("showcase");
      catImgEl.style.width = "100%";
      catImgEl.style.height = "100%";
      let catsImgDiv = document.querySelector(".catsImgDiv");
      catsImgDiv.appendChild(catImgEl);
    })
    .catch((err) => console.log(err));
}
*/

/*.boxy {
  border: 1px solid rgb(34, 33, 33);
  border-radius: 10px;
  padding: 0.5rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("../images/community.jpg") no-repeat center center/cover;
    background-position: center;
    position: relative;
    z-index: -1;
 
}*/
/*
const fetchGeneral = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const movies = await response.json();
  return movies;
};
fetchGeneral().catch((error) => {
  error.message; // 'An error has occurred: 404'
});
*/
/*
async function fetchMoviesAndCategories() {
  const [moviesResponse, categoriesResponse] = await Promise.all([
    fetch('/movies'),
    fetch('/categories')
  ]);
  const movies = await moviesResponse.json();
  const categories = await categoriesResponse.json();
  return [movies, categories];
}
fetchMoviesAndCategories().then(([movies, categories]) => {
  movies;     // fetched movies
  categories; // fetched categories
}).catch(error => {
  // /movies or /categories request failed
});
 */
