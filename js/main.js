document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const bottomLeftImage = card.querySelector(".bottom-left-image1");
      const rightMiddleImage = card.querySelector(".right-middle-image");
      if (bottomLeftImage && rightMiddleImage) { // Проверяем, существуют ли изображения
        bottomLeftImage.style.position = "absolute";
        bottomLeftImage.style.opacity = "0";
        bottomLeftImage.style.bottom = "0";
        bottomLeftImage.style.left = "0";
        bottomLeftImage.style.width = "160px";
        bottomLeftImage.style.zIndex = "1";
        rightMiddleImage.style.position = "absolute";
        rightMiddleImage.style.opacity = "0";
        rightMiddleImage.style.bottom = "75px";
        rightMiddleImage.style.right = "0";
        rightMiddleImage.style.width = "211px";
        rightMiddleImage.style.zIndex = "1";
  
  
        card.addEventListener("mouseenter", () => {
          animateImage(bottomLeftImage, -50, 45);
          animateImage(rightMiddleImage, 50, -30);
        });
        card.addEventListener("mouseleave", () => {
          hideImage(bottomLeftImage);
          hideImage(rightMiddleImage);
        });
      }
      const topLeftImage = card.querySelector(".top-left-image2");
      const topRightImage = card.querySelector(".top-right-image2");
      const bottomLeftImage2 = card.querySelector(".bottom-left-image2");
      const bottomRightImage = card.querySelector(".bottom-right-image2");
      if (topLeftImage && topRightImage && bottomLeftImage2 && bottomRightImage) { // Проверяем, существуют ли изображения
        [topLeftImage, topRightImage, bottomLeftImage2, bottomRightImage].forEach(
          (image) => {
            image.style.position = "absolute";
            image.style.opacity = "0";
            image.style.width = "118px";
          }
        );
        topLeftImage.style.top = "0";
        topLeftImage.style.left = "0";
        topRightImage.style.top = "0";
        topRightImage.style.right = "0";
        bottomLeftImage2.style.bottom = "0";
        bottomLeftImage2.style.left = "0";
        bottomRightImage.style.bottom = "0";
        bottomRightImage.style.right = "0";
        card.addEventListener("mouseenter", () => {
          animateImage(topLeftImage, -50, -50);
          animateImage(topRightImage, 50, -50);
          animateImage(bottomLeftImage2, -50, 50);
          animateImage(bottomRightImage, 50, 50);
        });
        card.addEventListener("mouseleave", () => {
          [topLeftImage, topRightImage, bottomLeftImage2, bottomRightImage].forEach(
            (image) => {
              hideImage(image);
            }
          );
        });
      }
  
      const topRightImage3 = card.querySelector(".top-right-image3");
      const bottomLeftImage3 = card.querySelector(".bottom-left-image3");
      if ( topRightImage3 && bottomLeftImage3) { // Проверяем, существуют ли изображения
        topRightImage3.style.position = "absolute";
        topRightImage3.style.opacity = "0";
        topRightImage3.style.bottom = "0";
        topRightImage3.style.left = "0";
        topRightImage3.style.width = "111px";
        topRightImage3.style.zIndex = "1";
        bottomLeftImage3.style.position = "absolute";
        bottomLeftImage3.style.opacity = "0";
        bottomLeftImage3.style.bottom = "75px";
        bottomLeftImage3.style.right = "0";
        bottomLeftImage3.style.width = "131px";
        bottomLeftImage3.style.zIndex = "1";
  
  
        card.addEventListener("mouseenter", () => {
          animateImage(topRightImage3, -50, 50);
          animateImage(bottomLeftImage3, 50, -50);
        });
        card.addEventListener("mouseleave", () => {
          hideImage(topRightImage3);
          hideImage(bottomLeftImage3);
        });
      }
  
  const topLeftImage4 = card.querySelector(".top-left-image4");
  const bottomRightImage4 = card.querySelector(".bottom-right-image4");
  
  if (topLeftImage4 && bottomRightImage4) { // Проверяем, существуют ли изображения
      topLeftImage4.style.position = "absolute";
      topLeftImage4.style.opacity = "0";
      topLeftImage4.style.top = "0"; // Устанавливаем в верхний угол
      topLeftImage4.style.left = "0"; // Устанавливаем в левый угол
      topLeftImage4.style.width = "220px";
  
      bottomRightImage4.style.position = "absolute";
      bottomRightImage4.style.opacity = "0";
      bottomRightImage4.style.bottom = "0"; // Устанавливаем в нижний угол
      bottomRightImage4.style.right = "0"; // Устанавливаем в правый угол
      bottomRightImage4.style.width = "174px";
  
      card.addEventListener("mouseenter", () => {
          animateImage(topLeftImage4, -40, -50); // Показываем левое верхнее изображение
          animateImage(bottomRightImage4, 50, 50); // Показываем правое нижнее изображение
      });
      
      card.addEventListener("mouseleave", () => {
          hideImage(topLeftImage4); // Скрываем левое верхнее изображение
          hideImage(bottomRightImage4); // Скрываем правое нижнее изображение
      });
  }
  
  const topLeftImage5 = card.querySelector(".top-left-image5");
  const bottomRightImage5 = card.querySelector(".bottom-right-image5");
  
  if (topLeftImage5 && bottomRightImage5) { // Проверяем, существуют ли изображения
      topLeftImage5.style.position = "absolute";
      topLeftImage5.style.opacity = "0";
      topLeftImage5.style.top = "0"; // Устанавливаем в верхний угол
      topLeftImage5.style.left = "0"; // Устанавливаем в левый угол
      topLeftImage5.style.width = "113px";
  
      bottomRightImage5.style.position = "absolute";
      bottomRightImage5.style.opacity = "0";
      bottomRightImage5.style.bottom = "0"; // Устанавливаем в нижний угол
      bottomRightImage5.style.right = "0"; // Устанавливаем в правый угол
      bottomRightImage5.style.width = "128px";
  
      card.addEventListener("mouseenter", () => {
          animateImage(topLeftImage5, -60, -40); // Показываем левое верхнее изображение
          animateImage(bottomRightImage5, 50, 50); // Показываем правое нижнее изображение
      });
      
      card.addEventListener("mouseleave", () => {
          hideImage(topLeftImage5); // Скрываем левое верхнее изображение
          hideImage(bottomRightImage5); // Скрываем правое нижнее изображение
      });
  }
  
  const topRightImage6 = card.querySelector(".top-right-image6");
  const bottomLeftImage6 = card.querySelector(".bottom-left-image6");
  
  if (topRightImage6 && bottomLeftImage6) { // Проверяем, существуют ли изображения
      topRightImage6.style.position = "absolute";
      topRightImage6.style.opacity = "0";
      topRightImage6.style.bottom = "0";
      topRightImage6.style.left = "0";
      topRightImage6.style.width = "220px";
      topRightImage6.style.zIndex = "1";
  
      bottomLeftImage6.style.position = "absolute";
      bottomLeftImage6.style.opacity = "0";
      bottomLeftImage6.style.bottom = "75px";
      bottomLeftImage6.style.right = "0";
      bottomLeftImage6.style.width = "140px";
      bottomLeftImage6.style.zIndex = "1";
  
      card.addEventListener("mouseenter", () => {
          animateImage(topRightImage6, -50, 50);
          animateImage(bottomLeftImage6, 50, -50);
      });
      
      card.addEventListener("mouseleave", () => {
          hideImage(topRightImage6);
          hideImage(bottomLeftImage6);
      });
  }
    });
   
    function animateImage(image, translateX, translateY) {
      image.style.transition = "opacity 0.2s, transform 0.5s";
      image.style.opacity = "1";
      image.style.transform = `translate(${translateX}%, ${translateY}%)`;
    }
  
    function hideImage(image) {
      image.style.transition = "opacity 0.2s, transform 0.5s";
      image.style.opacity = "0";
      image.style.transform = "translate(-50%, -50%)";
    }

    //--------------------------------------------------------------------//

    cards.forEach((card, index) => {
      const cardBody = card.querySelector(".card-body");

      card.addEventListener("mouseenter", () => {
          switch (index) {
              case 0:
              case 4:
                  cardBody.style.zIndex = "1"; // Set z-index to 1 for first and fifth cards
                  break;
              case 1:
              case 3:
                  cardBody.style.zIndex = "3"; // Set z-index to 3 for second and fourth cards
                  break;
              case 2:
                  cardBody.style.zIndex = "3"; // Set z-index to 3 for third card
                  break;
              case 5:
                  cardBody.style.zIndex = "1"; // Set z-index to 1 for sixth card
                  break;
              default:
                  break;
          }
      });

      card.addEventListener("mouseleave", () => {
          cardBody.style.zIndex = ""; 
      });
  });
  });
    

  
  
  //----------------------погода--- openweathermap-----------------//
  
        
  document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'c5e372c163c21b93da4e76ebae26d173';
    const cityId = '2643743'; 
  
    const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            return response.json();
        })
        .then(data => {
            updateWeatherForecast(data);
            startSliderAnimation();
        })
        .catch(error => {
            console.error('Проблема с получением данных погоды:', error);
        });
  
    function updateWeatherForecast(data) {
        const sliderTrack = document.getElementById('sliderTrack');
        // Очистка предыдущих данных прогноза
        sliderTrack.innerHTML = '';
  
        // Создание элементов прогноза и добавление их в трек слайдера
        data.list.forEach(item => {
            const forecastDateTime = new Date(item.dt * 1000); // Преобразование временной метки UNIX в объект JavaScript Date
            const temperature = item.main.temp;
            const weatherDescription = item.weather[0].description;
  
            const forecastItemElement = document.createElement('div');
            forecastItemElement.classList.add('forecast-item');
            forecastItemElement.innerHTML = `
                <p>Дата/время: ${forecastDateTime}</p>
                <p>Температура: ${temperature} °C</p>
                <p>Погода: ${weatherDescription}</p>
            `;
            sliderTrack.appendChild(forecastItemElement);
        });
  
        // Дублирование элементов прогноза для создания бесконечного цикла
        const sliderItems = document.querySelectorAll('.forecast-item');
        sliderItems.forEach(item => {
            const clone = item.cloneNode(true);
            sliderTrack.appendChild(clone);
        });
    }
  
    function startSliderAnimation() {
        const sliderTrack = document.getElementById('sliderTrack');
        const sliderItems = document.querySelectorAll('.forecast-item');
        const itemWidth = sliderItems[0].offsetWidth;
        const totalWidth = sliderItems.length * itemWidth;
        let currentPosition = 0;
        let animationInterval;
  
        function startAnimation() {
    stopAnimation();
    animationInterval = setInterval(() => {
        currentPosition -= 1; // Уменьшаем currentPosition для движения влево
        sliderTrack.style.transform = `translateX(${currentPosition}px)`;
        if (currentPosition < -totalWidth) {
            currentPosition = 0;
        }
    }, 30); // увеличение интервал на 20 миллисекунд для более плавной анимации
  }
  
        function stopAnimation() {
            clearInterval(animationInterval);
        }
  
        startAnimation();
  
        sliderTrack.addEventListener('mouseenter', stopAnimation);
        sliderTrack.addEventListener('mouseleave', startAnimation);
    }
  });
  
  ///---------------------///
        (function(d, s, id) {
            if (d.getElementById(id)) {
                if (window.__TOMORROW__) {
                    window.__TOMORROW__.renderWidget();
                }
                return;
            }
            const fjs = d.getElementsByTagName(s)[0];
            const js = d.createElement(s);
            js.id = id;
            js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";
  
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'tomorrow-sdk');
       