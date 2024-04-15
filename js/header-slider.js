const vzletiBtn = document.getElementById('vzleti-btn');
const padeniyaBtn = document.getElementById('padeniya-btn');
const indeksiBtn = document.getElementById('indeksi-btn');
const resultDiv = document.getElementById('result');

vzletiBtn.addEventListener('click', () => {
  // Здесь вы можете добавить код, который запрашивает данные из вашего API
  // и отображает их в resultDiv
  resultDiv.textContent = 'Вы выбрали Взлёты дня';
});

padeniyaBtn.addEventListener('click', () => {
  // Здесь вы можете добавить код, который запрашивает данные из вашего API
  // и отображает их в resultDiv
  resultDiv.textContent = 'Вы выбрали Падения дня';
});

indeksiBtn.addEventListener('click', () => {
  // Здесь вы можете добавить код, который запрашивает данные из вашего API
  // и отображает их в resultDiv
  resultDiv.textContent = 'Вы выбрали Индексы';
});