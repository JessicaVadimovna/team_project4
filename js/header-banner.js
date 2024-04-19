const text1_options = [
  "ЗАПУСКАЕМ ИНДЕКС IPO",
  "ДО 18,5% ГОДОВЫХ ПО ВКЛАДАМ НА ФИНУСЛУГАХ",
  "ОПЦИОННЫЙ КАЛЬКУЛЯТОР",
  "ОЦЕНИТЕ СВОЙ РИСК-ПРОФИЛЬ НА ФИНУСЛУГАХ",
  "НОВЫЕ ФЬЮЧЕРСЫ",
  "НОВЫЙ ПРОДУКТ ДЛЯ АЛГОТРЕЙДЕРОВ",
  "ВСЕ О ТОВАРНО-СЫРЬЕВЫХ РЫНКАХ",
  "НОВЫЕ ФЬЮЧЕРСЫ И ОПЦИОНЫ",
  "ФЬЮЧЕРСЫ НА ВАЛЮТЫ",
  "КАЛЬКУЛЯТОР ВЫПЛАТ",
  "НОВОСТИ ТРЕЙД РАДАРА",
  "RUSFAR CNY 1 НЕДЕЛЯ",
  "ВЕЧНЫЙ ФЬЮЧЕРС НА IMOEX",
  "РАСТИ С ДЕНЕЖНЫМ РЫНКОМ",
];
const text2_options = [
  "19 апреля. Код MIPO",
  "Успейте открыть с высокой ставкой",
  "Сервис срочного рынка",
  "Узнайте, в каком направлении лучше двигаться в инвестировании и улучшить свой опыт",
  "Фьючерсы на фонды Russel 2000 и DJ Indastrial Average",
  "Получите доступ к аналитическим сигналам, историческим и онлайн-данным",
  "Обзоры и аналитика",
  "5 марта запуск",
  "Сервис срочного рынка",
  "Узнайте, сколько могло накопиться к выплате по вашим иностранным бумагам*",
  "Терминал доступен к установке",
  "Запустили новый юаневый сервис денежного рынка",
  "Он вечный",
  "Биржевые фонды денежного рынка. Ищите в приложениях брокеров",
];
const color_options = ["#f3f4f6"];
const image_options = [
  "assets/img/ipoindex.png",
  "assets/img/main-fu.png",
  "assets/img/anyconv.png",
  "assets/img/800x376-1.png",
  "assets/img/rus-dj.png",
  "assets/img/algopack-announce.png",
  "assets/img/bann.png",
  "assets/img/svcb-moex.png",
  "assets/img/futures-currencies-upd.png",
  "assets/img/clider-moex-calculator-800h376-new.png",
  "assets/img/radar-1812.png",
  "assets/img/anyconv_2.png",
  "assets/img/imoexf.png",
  "assets/img/funds-main.png",
];
const number_pagination = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
];
var i = 0;
const currentOptionText1 = document.getElementById(
  "current-option-text1_banner"
);
const currentOptionText2 = document.getElementById(
  "current-option-text2_banner"
);
const number_paginationText = document.getElementById("number_pagination");
const currentOptionImage = document.getElementById("image_banner");
const carousel = document.getElementById("carousel-wrapper_banner");
const mainMenu = document.getElementById("menu_banner");
const optionPrevious = document.getElementById("previous-option_banner");
const optionNext = document.getElementById("next-option_banner");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];
number_paginationText.innerText = number_pagination[i];

setInterval(
  (optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];

    currentOptionText2.dataset.nextText = text2_options[i];
    number_paginationText.dataset.nextText = number_pagination[i];

    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");

    setTimeout(() => {
      currentOptionImage.style.backgroundImage =
        "url(" + image_options[i] + ")";
    }, 455);

    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      number_paginationText.innerText = number_pagination[i];
      carousel.classList.remove("anim-next");
    }, 650);
  }),
  9000
);

//var timer = 0;
//makeTimer(); //Создаем интервал
//function makeTimer() {
//clearInterval(timer); //Очистим интервал, это позволит прервать его работу и отменить перелистывание
//timer = setInterval(function () {
// i++;
//optionNext_();
// }, 5000);
//}

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  currentOptionText1.dataset.previousText = text1_options[i];

  currentOptionText2.dataset.previousText = text2_options[i];
  number_paginationText.dataset.nextText = number_pagination[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    number_paginationText.innerText = number_pagination[i];
    carousel.classList.remove("anim-previous");
  }, 650);
};
