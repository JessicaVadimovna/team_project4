const buttons = document.querySelectorAll('.header-quote button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Удаляем класс "active" со всех кнопок
    buttons.forEach(b => b.classList.remove('active'));
    // Добавляем класс "active" к нажатой кнопке
    this.classList.add('active');
  });
});

// Активируем кнопку "Индексы" при загрузке страницы
window.onload = function() {
  const indeksiBtn = document.getElementById('indeksi-btn');
  indeksiBtn.classList.add('active');
}



// Получаем элементы кнопок и виджетов
const vzletiBtn = document.getElementById("vzleti-btn");
const padeniyaBtn = document.getElementById("padeniya-btn");
const indeksiBtn = document.getElementById("indeksi-btn");
const vzletiWidget = document.getElementById("vzleti");
const padeniyaWidget = document.getElementById("padeniya");
const indeksiWidget = padeniyaWidget.nextElementSibling; // Предполагаем, что индексы идут сразу после падений

// Функция для скрытия всех виджетов
function hideAllWidgets() {
  vzletiWidget.style.display = "none";
  padeniyaWidget.style.display = "none";
  indeksiWidget.style.display = "none";
}

// По умолчанию показываем только индексы
hideAllWidgets();
indeksiWidget.style.display = "block";

// Обработчики событий для кнопок
vzletiBtn.addEventListener("click", () => {
  hideAllWidgets();
  vzletiWidget.style.display = "block";
});

padeniyaBtn.addEventListener("click", () => {
  hideAllWidgets();
  padeniyaWidget.style.display = "block";
});

indeksiBtn.addEventListener("click", () => {
  hideAllWidgets();
  indeksiWidget.style.display = "block";
});


// Функция для инициализации бегущей строки виджета
function initMarquee(widget) {
  const script = document.createElement("script");
  script.src = "https://cryptorank.io/widget/marquee.js";
  widget.appendChild(script);
}


// Обработчики событий для кнопок
vzletiBtn.addEventListener("click", () => {
  hideAllWidgets();
  vzletiWidget.style.display = "block";
  initMarquee(vzletiWidget); // Инициализируем бегущую строку
});

padeniyaBtn.addEventListener("click", () => {
  hideAllWidgets();
  padeniyaWidget.style.display = "block";
  initMarquee(padeniyaWidget); // Инициализируем бегущую строку
});

indeksiBtn.addEventListener("click", () => {
  hideAllWidgets();
  indeksiWidget.style.display = "block";
  initMarquee(indeksiWidget); // Инициализируем бегущую строку
});