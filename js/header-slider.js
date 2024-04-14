'use strict';
const request = require('request');
const apiKey = "W718V36QW9173RIO"; // Замените на ваш API ключ
const symbols = ["IBM", "AAPL", "GOOG", "TSLA"]; // Примеры символов
const quotesList = document.getElementById("quotes-list");

async function getQuotes() {
  quotesList.innerHTML = ""; // Очищаем список

  for (const symbol of symbols) {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();

      // Получаем данные о последнем дне торгов
      const lastDayData = data["Time Series (Daily)"][Object.keys(data["Time Series (Daily)"])[0]];
      const price = parseFloat(lastDayData["4. close"]).toFixed(2);
      const previousClose = parseFloat(lastDayData["1. open"]); 
      const changePercent = (((price - previousClose) / previousClose) * 100).toFixed(2);
      const changeClass = changePercent > 0 ? "positive" : "negative";

      const quoteElement = document.createElement("div");
      quoteElement.classList.add("quote");
      quoteElement.innerHTML = `
            ${symbol}
            ${price}
            ${changePercent}%
        `;

      quotesList.appendChild(quoteElement);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  }
}

getQuotes(); // Получаем котировки при загрузке страницы