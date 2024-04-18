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

async function newsApi() {
  try {
    const apiObj = await fetch("https://api.spaceflightnewsapi.net/v4/articles/")
  ;
  const obj = await apiObj.json();
  console.log(obj);
  for(let i = 0; i < obj.results.length; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('main-news__box');
    divId = +i;
    newDiv.innerHTML = `<h2 class="news-box__title">${obj.results[divId].title}</h2><p class="news-box__text">${obj.results[divId].summary}</p><button class="main-news__button" id="newsButtonOne">Узнать больше</button>`;
    console.log(newDiv);
    const newsBox = document.querySelector('.main-news__container');
    newsBox.appendChild(newDiv);
  }
} catch (error) {
  console.log(error);
}
  
}
newsApi();
