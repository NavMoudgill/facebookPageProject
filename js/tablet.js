const createNavbar = ({ img, name }) => {
  return `<div id="" class="lastPartBoxElems">
      <img src="${img}" alt="" class="img-story1" />
      <p>${name}</p>
      </div>`;
};
//clicking the button show me the navbar to the right side
let handler = document.getElementById("navbar");
//     handler.style.display="block";
window.addEventListener("resize", () => {
  if (window.innerWidth < 903) console.log("hello");
});
