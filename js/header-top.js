// 1. Строка  поиска
const inputName = document.forms.headerForm.searchForm;
console.log(inputName);

// Строка поиска: убираем/возвращаем слово "Поиск"
inputName.addEventListener("focus", function () {
  inputName.placeholder = "Введите минимум два символа";
  redSearch.src = "./assets/img/header-top/search-red.svg";
  inputName.style.outline = "none";
});

inputName.addEventListener("blur", function () {
  inputName.placeholder = "Поиск";
  redSearch.src = "./assets/img/header-top/search-black.svg";
});

// 2. Окрашивание иконок (лупа и корзина) в красный цвет при наведении
const redBusket = document.getElementById("cart");
const redSearch = document.getElementById("search");

//Добавляем обработчики событий mouseenter и mouseleave на Лупу
redSearch.addEventListener("mouseenter", () => {
  redSearch.src = "./assets/img/header-top/search-red.svg";
});

redSearch.addEventListener("mouseleave", () => {
  redSearch.src = "./assets/img/header-top/search-black.svg";
});
//Добавляем обработчики событий mouseenter и mouseleave на корзину
redBusket.addEventListener("mouseenter", () => {
  redBusket.src = "./assets/img/header-top/shopping-cart-red.svg";
});

redBusket.addEventListener("mouseleave", () => {
  redBusket.src = "./assets/img/header-top/shopping-cart-black.svg";
});

// 3. Окрашивание точки и Направления в красный цвет при наведении
const redDirDots = document.querySelector(".header-top__directions-list");
const redDots = document.getElementById("dots");
const redDirText = document.getElementById("dir-tittle");

//Добавляем обработчики событий mouseenter и mouseleave на точки и Направления
redDirDots.addEventListener("mouseenter", () => {
  redDots.src = "./assets/img/header-top/menu-dots-red.svg";
  redDirText.style.color = "rgb(245, 20, 20)";
  redDirDots.style.transition = "2s ease-in";
});
redDirDots.addEventListener("mouseleave", () => {
  redDots.src = "./assets/img/header-top/menu-dots-black.svg";
  redDirText.style.color = "black";
});

// 4. Окрашивание элементов выпадающего списка в красный цвет при наведении
const redLi = document.querySelectorAll(".li-red");
const redArrows = document.querySelectorAll(".header-top__directions-arrow");

redLi.forEach((el) => {
  const redH2s = el.querySelector(".h2-red");
  el.addEventListener("mouseenter", () => {
    redH2s.style.color = "red";
  });

  el.addEventListener("mouseleave", () => {
    redH2s.style.color = "black";
  });
});

// 5. Время, дата, день недели
const currentDate = document.querySelector(".header-top__date");
const dateCur = new Date();
locale = "ru-ru";

//Получаем текущий день недели

const dayOfWeekLow = dateCur.toLocaleString(locale, { weekday: "long" });
const dayOfWeekArray = dayOfWeekLow.split("");
const firstLetter = dayOfWeekArray[0].toUpperCase();
const dayOfWeek = firstLetter + dayOfWeekLow.slice(1);

// Получаем текущее число
const date = dateCur.getDate();

// Получаем текущий месяц
const monthLow = dateCur.toLocaleString(locale, { month: "long" });
const monthArray = monthLow.split("");
const month = monthArray[0].toUpperCase() + monthLow.slice(1, length - 1) + "я";

// Получаем текущий час
const hour = dateCur.getHours();

// Получаем текущие минуты
const minut = dateCur.getMinutes();

let now = `${dayOfWeek}, ${date} ${month} ${hour}:${minut}`;
currentDate.textContent = now;

// 6. Выпадающее меню
// function dropdown() {
//   document.getElementById("myDropdown").classList.toggle("header-top__dropdown-show");
// }
// document.getElementById("drop").addEventListener("click", dropdown);

document.getElementById("drop").addEventListener("click", function (event) {
  event.preventDefault();
  document
    .getElementById("myDropdown")
    .classList.toggle("header-top__dropdown-show");
  redDots.src = "./assets/img/header-top/cross-red.svg";
});

// Закрыть меню при щелчке за пределами
document.addEventListener("click", function (event) {
  if (!event.target.matches("#myDropdown")) {
    let dropdowns = document.getElementsByClassName(".dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
});
