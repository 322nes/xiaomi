const blackAwhite = document.querySelector('#blackAwhite');
const blackBtn = document.querySelector('#black-btn');
const whiteBtn = document.querySelector('#white-btn');
const blackSam = document.querySelector('#black-sam');
const whiteSam = document.querySelector('#white-sam');

function blackAWhite() {
  function toggleBlackAWhite() {
    blackBtn.classList.toggle('_active');
    whiteBtn.classList.toggle('_active');
    blackSam.classList.toggle('_active-sam');
    whiteSam.classList.toggle('_active-sam');
  }
  blackAwhite.onclick = toggleBlackAWhite;
}
blackAWhite();