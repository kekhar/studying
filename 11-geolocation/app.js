'use strict';

function getUserCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        reject(console.error(error));
      }
    );
  });
}

getUserCoordinates()
  .then((coordinates) => {
    console.log(
      "Получены координаты:",
      coordinates.latitude,
      coordinates.longitude
    );
  })
  .catch((e) => {
    console.error("Ошибка при получении координат:", e);
  });