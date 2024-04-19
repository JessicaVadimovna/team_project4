ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.765546, 37.638180],
        zoom: 13
    });

    var placemarks = [
        {
            coordinates: [55.755481, 37.606476],
            title: 'Московская Биржа, Большой Кисловский пер., 13, Москва',
        },
        {
            coordinates: [55.772046, 37.675127],
            title: 'Московская Биржа, Спартаковская ул., 12, Москва',
        }
    ];

    placemarks.forEach(function (placemark) {
        var marker = new ymaps.Placemark(placemark.coordinates, {
            hintContent: "Мосбиржа",
            balloonContentHeader: placemark.title,
        });
        myMap.geoObjects.add(marker);
    });
}
