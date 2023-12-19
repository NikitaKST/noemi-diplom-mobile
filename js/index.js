document.addEventListener('DOMContentLoaded', function () {
  let closeButton = document.querySelector('.button-close');
  let popup = document.querySelector('.popup');

  closeButton.addEventListener('click', function () {
      // Добавляем класс "popup-hidden" для скрытия popup
      popup.classList.add('popup-hidden');
  });
});

