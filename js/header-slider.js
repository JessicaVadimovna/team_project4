const apiKey = 'LT0PSH21UKRTLOHZ'; // Ваш API ключ


// Функция для получения данных из API
async function getApiData(functionName, symbol, interval, otherParams) {
  const url = `https://www.alphavantage.co/query?function=${functionName}&symbol=${symbol}&interval=${interval}&apikey=${apiKey}&${otherParams}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Функция для обработки данных и создания HTML
function createHTML(data) {
  console.log(data); // Вывод ответа API в консоль для отладки

  let html = '';

  // Проверка на наличие сообщения об ошибке API
  if (data['Note']) {
    html = `API limit reached. Please wait and try again later.`;
  } else if (data['Meta Data']) { // Проверка на наличие метаданных (для "Индексы")
    // Обработка данных для "Индексы"
    const quote = data['Global Quote'];
    html = `
      
        ${quote['01. symbol']}
        ${quote['05. price']}
        ${quote['10. change percent']}
      
    `;
  } else if (data['Time Series (Daily)']) { // Проверка на наличие временных рядов (для "Взлеты дня" и "Падения дня")
    // Обработка данных для "Взлеты дня" и "Падения дня"
    const dailyData = Object.values(data)[0];
    const sortedData = Object.entries(dailyData)
      .map(([date, values]) => ({ date, ...values, changePercent: parseFloat(values['4. close']) - parseFloat(values['1. open']) }))
      .sort((a, b) => b.changePercent - a.changePercent); // Сортировка по изменению цены

    // Выбор топ-5 акций
    const top5 = button.textContent === 'Взлеты дня' ? sortedData.slice(0, 5) : sortedData.slice(-5).reverse();

    html = top5.map(item => ` 
      ${item.symbol} 
      ${item['4. close']} 
      ${item.changePercent.toFixed(2)}% 
    `).join('');
  } else {
    html = `Неизвестный тип данных`;
  }

  return html;
}

// Обработка кликов по кнопкам
const buttons = document.querySelectorAll('.button-quote');
const quotesList = document.getElementById('quotes-list');
buttons.forEach(button => {
  button.addEventListener('click', async () => {
    try {
      const functionName = button.textContent === 'Взлеты дня' ? 'TOP_GAINERS' : button.textContent === 'Падения дня' ? 'TOP_LOSERS' : 'GLOBAL_QUOTE'; 
      const symbol = button.textContent === 'Индексы' ? '^GSPC' : 'AAPL,MSFT,IBM,GOOG,AMZN'; 
      const interval = '5min'; 
      const otherParams = ''; 
      
      const data = await getApiData(functionName, symbol, interval, otherParams);
      const html = createHTML(data);
      quotesList.innerHTML = html;
    } catch (error) {
      console.error("Ошибка:", error);
      quotesList.innerHTML = "Ошибка при получении данных"; // Можно заменить на более информативное сообщение
    }
  });
});