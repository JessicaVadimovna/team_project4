const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
// const closeIcon= document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");

// function burgerMenu(icon) {
//    icon.classList.toggle("change");
//  }

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
   //  closeIcon.style.display = "none";
   //  menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
   //  closeIcon.style.display = "block";
   //  menuIcon.style.display = "none";
   
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)




const linksDropdown1 = document.getElementById('linksDropdown1');
const buttonLink1 = document.querySelector('.navLink1');
const divDropdown = document.querySelector('links-dropdown');






// ------------------------------NEWS---------------------------

const newsOne = document.querySelector('.main-news__one');
const newsTwo = document.querySelector('.main-news__two');
const newsThree = document.querySelector('.main-news__three');
const newsButtonOne = document.getElementById('newsButtonTwo');
const newsButtonTwo = document.getElementById('newsButtonTwo');
const newsButtonThree = document.getElementById('newsButtonThree');


function newsApi() {
  fetch("https://api.spaceflightnewsapi.net/v4/articles/")
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => {
    console.log(error);
  })
}
newsApi();