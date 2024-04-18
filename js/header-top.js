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
const redBusket = document.querySelector(".header-top__cart-image");
const redSearch = document.querySelector(".header-top__search-icon");

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
const redDots = document.querySelector(".header-top__directions-icon");
const redDirText = document.querySelector(".header-top__directions-text");

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
const redLi = document.querySelector(".li-red");
const redH2s = document.querySelectorAll(".h2-red");
const redArrows = document.querySelectorAll(".header-top__directions-arrow");

// Добавляем обработчики событий mouseenter и mouseleave на элементы выпадающего списка
redArrows.forEach((redArrow) => {
  redLi.addEventListener("mouseenter", () => {
    redArrow.src = "./assets/img/header-top/diagonal-arrow-right-up-red.svg";
  });
});
redH2s.forEach((redH2) => {
  redLi.addEventListener("mouseenter", () => {
    redH2.style.color = "red";
  });
});

redArrows.forEach((redArrow) => {
  redLi.addEventListener("mouseleave", () => {
    redArrow.src = "./assets/img/header-top/diagonal-arrow-right-up-black.svg";
  });
});
redH2s.forEach((redH2) => {
  redLi.addEventListener("mouseleave", () => {
    redH2.style.color = "black";
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
