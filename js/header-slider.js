const buttons = document.querySelectorAll('.header-quote button');
const vzletiBtn = document.getElementById("vzleti-btn");
const padeniyaBtn = document.getElementById("padeniya-btn");
const indeksiBtn = document.getElementById("indeksi-btn");
const vzletiWidget = document.getElementById("vzleti");
const padeniyaWidget = document.getElementById("padeniya");
const indeksiWidget = padeniyaWidget.nextElementSibling;

function hideAllWidgets() {
  vzletiWidget.style.display = "none";
  padeniyaWidget.style.display = "none";
  indeksiWidget.style.display = "none";
}

function setActiveButton(clickedBtn) {
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  clickedBtn.classList.add('active');
}

window.onload = function() {
  setActiveButton(indeksiBtn);
  hideAllWidgets();
  indeksiWidget.style.display = "block";
};

buttons.forEach(button => {
  button.addEventListener('click', function() {
    setActiveButton(this);
    hideAllWidgets();
    switch(this.id) {
      case "vzleti-btn":
        vzletiWidget.style.display = "block";
        initMarquee(vzletiWidget);
        break;
      case "padeniya-btn":
        padeniyaWidget.style.display = "block";
        initMarquee(padeniyaWidget);
        break;
      case "indeksi-btn":
        indeksiWidget.style.display = "block";
        initMarquee(indeksiWidget);
        break;
    }
  });
});

function initMarquee(widget) {
  const script = document.createElement("script");
  script.src = "https://cryptorank.io/widget/marquee.js";
  widget.appendChild(script);
}








