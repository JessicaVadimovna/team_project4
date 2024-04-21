const buttons = document.querySelectorAll('.header-quote button'); // Выбираем все кнопки с классом 'header-quote button'.
const vzletiBtn = document.getElementById("vzleti-btn"); // Получаем ссылку на кнопку с идентификатором 'vzleti-btn'.
const padeniyaBtn = document.getElementById("padeniya-btn"); // Получаем ссылку на кнопку с идентификатором 'padeniya-btn'.
const indeksiBtn = document.getElementById("indeksi-btn"); // Получаем ссылку на кнопку с идентификатором 'indeksi-btn'.
const vzletiWidget = document.getElementById("vzleti"); // Получаем ссылку на виджет с идентификатором 'vzleti'.
const padeniyaWidget = document.getElementById("padeniya"); // Получаем ссылку на виджет с идентификатором 'padeniya'.
const indeksiWidget = padeniyaWidget.nextElementSibling; // Получаем ссылку на следующий элемент после 'padeniyaWidget'.

function hideAllWidgets() { // Функция для скрытия всех виджетов.
  vzletiWidget.style.display = "none"; // Скрываем виджет 'vzleti'.
  padeniyaWidget.style.display = "none"; // Скрываем виджет 'padeniya'.
  indeksiWidget.style.display = "none"; // Скрываем виджет 'indeksi'.
}

function setActiveButton(clickedBtn) { // Функция для установки активной кнопки.
  buttons.forEach(button => { // Перебираем все кнопки.
    button.classList.remove('active'); // Удаляем у всех кнопок класс 'active'.
  });
  clickedBtn.classList.add('active'); // Добавляем класс 'active' к кликнутой кнопке.
}

window.onload = function() { // При загрузке страницы...
  setActiveButton(indeksiBtn); // Устанавливаем активной кнопку с идентификатором 'indeksi-btn'.
  hideAllWidgets(); // Скрываем все виджеты.
  indeksiWidget.style.display = "block"; // Отображаем виджет 'indeksi'.
};

buttons.forEach(button => { // Для каждой кнопки...
  button.addEventListener('click', function() { // Добавляем слушатель события клика.
    setActiveButton(this); // Устанавливаем активной текущую кнопку.
    hideAllWidgets(); // Скрываем все виджеты.
    switch(this.id) { // Проверяем идентификатор текущей кнопки.
      case "vzleti-btn": // Если идентификатор равен 'vzleti-btn'...
        vzletiWidget.style.display = "block"; // Отображаем виджет 'vzleti'.
        initMarquee(vzletiWidget); // Инициализируем скроллирующий блок для 'vzleti'.
        break;
      case "padeniya-btn": // Если идентификатор равен 'padeniya-btn'...
        padeniyaWidget.style.display = "block"; // Отображаем виджет 'padeniya'.
        initMarquee(padeniyaWidget); // Инициализируем скроллирующий блок для 'padeniya'.
        break;
      case "indeksi-btn": // Если идентификатор равен 'indeksi-btn'...
        indeksiWidget.style.display = "block"; // Отображаем виджет 'indeksi'.
        initMarquee(indeksiWidget); // Инициализируем скроллирующий блок для 'indeksi'.
        break;
    }
  });
});

function initMarquee(widget) { // Функция для инициализации скроллирующего блока в переданном виджете.
  const script = document.createElement("script"); // Создаем элемент скрипта.
  script.src = "https://cryptorank.io/widget/marquee.js"; // Устанавливаем источник скрипта.
  widget.appendChild(script); // Добавляем скрипт в виджет.
}









